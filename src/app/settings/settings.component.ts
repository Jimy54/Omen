import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  identity;
  userName;
  nickName;
  userEmail;
  userPassword;

  constructor(private userService: AuthService, private router: Router) {
    this.identity = userService.getIdentity();
  }

  ngOnInit() {
    this.userName = this.identity.UserName;
    this.nickName = this.identity.NickName;
    this.userEmail = this.identity.UserEmail;
    this.userPassword = this.identity.UserPassword;
  }

  

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
