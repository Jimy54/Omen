import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../service/auth-service.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  UserID;
  UserName;
  UserNickName;
  UserEmail;
  UserPassword;

  ngOnInit() {}

  private url = "http://localhost:4120/user/createUser";
  enterUser() {
    this.http
      .post(this.url, {
        UserName: this.UserName,
        UserNickName: this.UserNickName,
        UserEmail: this.UserEmail,
        UserPassword: this.UserPassword
      })
      .subscribe(result => {
        this.snackBar.open("Registro Realizado", "Aceptar");
        this.router.navigate(["/login"]);
      });
  }
}
