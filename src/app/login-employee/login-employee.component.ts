import { Component, OnInit } from "@angular/core";
import { Employer } from "../models/employer.model";
import { AuthService } from "../service/auth-service.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-employee",
  templateUrl: "./login-employee.component.html",
  styleUrls: ["./login-employee.component.css"]
})
export class LoginEmployeeComponent implements OnInit {
  private employee: Employer;
  public token;
  public status: string;
  public identity;
  public correo = "";
  public contrasena = "";
  constructor(
    private userService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
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
    this.userService.loginEmployee(this.employee).subscribe(
      response => {
        this.identity = response.data[0];
        if (!this.identity) {
          this.snackBar.open("Datos Erroneos", "Aceptar", {
            duration: 700
          });
        } else {
          localStorage.setItem("identity", JSON.stringify(this.identity));
          this.getToken();
          this.router.navigate(["/facturas"]);
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
    this.userService.loginEmployee(this.employee, "true").subscribe(
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
