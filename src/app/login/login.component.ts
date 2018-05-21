import { Component, OnInit } from "@angular/core";
import { Users } from "../models/user.model";
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from "../service/auth-service.service";
import { MatSnackBar } from "@angular/material";
import { Employer } from "../models/employer.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user: Users;
  public employee: Employer;
  public token;

  public status: string;
  public identity;
  public correo = "";
  public contrasena = "";

  public token1;
  public status1: string;
  public identity1;

  constructor(
    private userService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.user = new Users("", "", "", "", "");
    this.employee = new Employer(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }

  ngOnInit() {}

  onSubmit() {
    this.userService.login(this.user).subscribe(
      response => {
        this.identity = response.data[0];
        if (!this.identity) {
          this.snackBar.open("Datos Erroneos", "Aceptar", {
            duration: 700
          });
        } else {
          localStorage.setItem("identity", JSON.stringify(this.identity));
          this.getToken();
          this.router.navigate(["/Navegacion"]);
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error";
        }
      }
    );
  }

  onSubmitEmployee() {
    this.userService.loginEmployee(this.employee).subscribe(
      response => {
        this.identity1 = response.data[0];
        if (!this.identity1) {
          this.snackBar.open("Datos Erroneos", "Aceptar", {
            duration: 700
          });
        } else {
          localStorage.setItem("identity", JSON.stringify(this.identity1));
          this.getToken1();
          this.router.navigate(["/Navegacion"]);
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error";
        }
      }
    );
  }

  getToken() {
    this.userService.login(this.user, "true").subscribe(
      response => {
        this.token = response.token;
        console.log(this.token);
        if (this.token <= 0) {
          this.status = "error";
        } else {
          //PERSISTIR DATOS DEL USUARIO
          localStorage.setItem("token", this.token);
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error";
        }
      }
    );
  }

  getToken1() {
    this.userService.loginEmployee(this.employee, "true").subscribe(
      response => {
        this.token1 = response.token;
        console.log(this.token1);
        if (this.token1 <= 0) {
          this.status = "error";
        } else {
          //PERSISTIR DATOS DEL USUARIO
          localStorage.setItem("token", this.token1);
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error";
        }
      }
    );
  }
}
