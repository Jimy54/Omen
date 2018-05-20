import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Users } from "../models/user.model";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  identity;
  UserName;
  NickName;
  UserEmail;
  UserPassword;
  private user: Users;
  public token;
  public status: string;

  constructor(
    private userService: AuthService,
    private router: Router,
    private _route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.user = this.userService.getIdentity();
    this.identity = this.user;
    this.token = this.userService.getToken();
  }

  ngOnInit() {
    console.log(this.user);
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe(response => {
      localStorage.setItem("identity", JSON.stringify(this.user));
      this.identity = this.user;
      this.snackBar.open("Datos Actualizados", "Aceptar", {
        duration: 900
      });
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
