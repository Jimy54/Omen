import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../service/auth-service.service";
import { Business } from "../models/business.model";
import { MatSnackBar } from "@angular/material";
import { SendToken } from "../service/SendToken.service";
import { BusinessService } from "../service/business.service";

@Component({
  selector: "app-business",
  templateUrl: "./business.component.html",
  styleUrls: ["./business.component.css"]
})
export class BusinessComponent implements OnInit {
  _postArray: Business[];
  public business: Business;
  public businessIdentity;
  identity_id;
  public identityBusiness;
  tokenBusiness;
  url = "http://localhost:4120/business/createBusiness";

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private userService: AuthService,
    private snackBar: MatSnackBar,
    private token: SendToken,
    private businessService: BusinessService
  ) {
    this.identity_id = userService.getIdentity();
    this.business = new Business("", "", "", this.identity_id.UserID);
  }

  ngOnInit() {}

  enterBusiness() {
    this.userService.business(this.business).subscribe(data => {
      this.identityBusiness = data.data.insertId;
      console.log(data.data.insertId);
      this.snackBar.open("Empresa Registrada", "Aceptar", {
        duration: 700
      });
      localStorage.setItem("business", JSON.stringify(this.identityBusiness));
      this.router.navigate(["/empleados"]);
    });
  }

  getBusiness() {
    this.businessService
      .getBusiness()
      .subscribe(
        resultArray => this._postArray,
        error => console.log("Error " + error)
      );
  }

  //  this.router.navigate(["/empresas"]);
}
