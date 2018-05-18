import { Component, OnInit } from "@angular/core";
import { Provider } from "../models/provider.model";
import { Inventary } from "../models/inventary.model";
import { AuthService } from "../service/auth-service.service";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { SendToken } from "../service/SendToken.service";
import { Purchase } from "../models/purchase.Model";
import { ProviderService } from "../service/provider.service";
import { InventaryService } from "../service/inventary.service";
import { ThrowStmt } from "@angular/compiler";
@Component({
  selector: "purchase",
  templateUrl: "./purchase.component.html",
  styleUrls: ["./purchase.component.css"]
})
export class PurchaseComponent implements OnInit {
  public i: number = 0;
  public des: boolean = true;
  identity_id;
  identityPurchase;

  ProviderID;
  Date;
  Total;
  BusinessID;

  Quantity;
  InventaryID;
  Price;
  SubTotal;

  PriceInv;

  purchase: Purchase;

  constructor(
    private userService: AuthService,
    private snackBar: MatSnackBar,
    private token: SendToken,
    private httpClient: HttpClient,
    private providerService: ProviderService,
    private inventaryService: InventaryService
  ) {
    this.identity_id = userService.getIdentity();
    this.purchase = new Purchase("", "", "", "", this.identity_id.businessID);
  }

  _postArrayProvider: Provider[];
  _postArrayInventary: Inventary[];
  post: Inventary[];

  ngOnInit() {
    this.getInventaries();
    this.getProvider();

    /*
    this.Price = this._postArrayInventary.filter(function(c){
      for (let x = 0; x < this._postArrayInventary.length; x++) {
        if (this._postArrayInventary[x].InventaryID === id) {
          return this._postArrayInventary[x].Price;
        }
      }
    }
    }*/
  }

  addInput() {
    this.i = this.i + 1;

    var table = document.getElementById("dataTable");
    var tr = document.getElementById("trA");
    var tr2 = document.getElementById("trA2");
    var tr3 = document.getElementById("trA3");
    var tr4 = document.getElementById("trA4");

    var elementInput1 = document.createElement("input");
    var elementSelect = document.createElement("select");
    var elementInput2 = document.createElement("input");
    var elementInput3 = document.createElement("input");
    var elementBr = document.createElement("br");
    var elementBr2 = document.createElement("br");
    var elementBr3 = document.createElement("br");
    var elementBr4 = document.createElement("br");

    elementInput1.className = "inputs";
    elementInput1.setAttribute("size", "50");
    elementInput1.setAttribute("name", "inputss");

    console.log(this.i);
    tr.appendChild(elementInput1);
    tr2.appendChild(elementSelect);
    tr3.appendChild(elementInput2);
    tr4.appendChild(elementInput3);
    tr.appendChild(elementBr);
    tr2.appendChild(elementBr2);
    tr3.appendChild(elementBr3);
    tr4.appendChild(elementBr4);
  }

  enterPurchase() {
    this.userService.purchase(this.purchase).subscribe(data => {
      this.identityPurchase = data.data.insertId;
      localStorage.setItem("purchase", JSON.stringify(this.identityPurchase));
    });
  }

  enterPurchaseDetaill() {
    this.httpClient
      .post(
        "http://localhost:4120/purchaseDetail/createPurchaseDetail",
        {
          Quantity: this.Quantity,
          InventaryID: this.InventaryID,
          Price: this.Price,
          SubTotal: this.SubTotal,
          BusinessID: this.identity_id.businessID,
          PurchaseID: JSON.parse(localStorage.getItem("purchase"))
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(reponse => {
        console.log("Hola");
      });
  }

  getProvider(): void {
    this.providerService
      .getProvider()
      .subscribe(
        resultArray => (this._postArrayProvider = resultArray),
        error => console.log("Error " + error)
      );
  }

  getInventaries(): void {
    this.inventaryService
      .getInventary()
      .subscribe(
        resultArray => (
          (this._postArrayInventary = resultArray),
          console.log(this._postArrayInventary.length)
        ),
        error => console.log("Error " + error)
      );
  }

  selectInventaries(id) {
   
  }
}
