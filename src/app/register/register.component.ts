import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../service/auth-service.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userService: AuthService,
    private snackBar: MatSnackBar
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
        UserNickName: this.UserEmail,
        UserEmail: this.UserEmail,
        UserPassword: this.UserPassword
      })
      .subscribe(result => {
        this.snackBar.open("Registro Realizado", "Aceptar");
      });
  }
}
