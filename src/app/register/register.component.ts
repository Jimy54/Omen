import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../service/auth-service.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { Users } from "../models/user.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public user: Users;
  public identity;
  public token;
  public status: string;

  constructor(
    private http: HttpClient,
    private userService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.user = new Users("", "", "", "", "");
  }

  ngOnInit() {}

  private url = "http://localhost:4120/user/createUser";
  enterUser() {
    this.userService.registrar(this.user).subscribe(data => {
      this.identity = data.data.insertId;
      localStorage.setItem("identity", JSON.stringify(this.identity));
      this.getToken();
      this.router.navigate(["/empresas"]);
      this.snackBar.open("Usuario Registrado", "Aceptar", {
        duration: 700
      });
    });

    /*
    this.http
      .post(this.url, {
        UserName: this.UserName,
        UserNickName: this.UserNickName,
        UserEmail: this.UserEmail,
        UserPassword: this.UserPassword
      })
      .subscribe(result => {
        this.identityBusiness = data.data.insertId;
        console.log(data.data.insertId);
        this.snackBar.open("Registro Realizado", "Aceptar");
        this.router.navigate(["/login"]);
      });*/
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
