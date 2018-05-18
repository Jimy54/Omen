import { Component, OnInit } from "@angular/core";
import { Users } from "../models/user.model";
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from "../service/auth-service.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user: Users;
  public token;
  public status: string;
  public identity;
  public correo = "";
  public contrasena = "";

  constructor(
    private userService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.user = new Users("", "", "", "", "");
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
}
