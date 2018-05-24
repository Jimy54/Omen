import { Component, OnInit } from "@angular/core";
import { InventaryService } from "../service/inventary.service";
import { Inventary } from "../models/inventary.model";
import { HttpClient } from "@angular/common/http";
import { SendToken } from "../service/SendToken.service";
import { MatSnackBar } from "@angular/material";
import { AuthService } from "../service/auth-service.service";
import { Invoice } from "../models/invoice.model";
import { AnimationStyleMetadata } from "@angular/animations";
import { FormControl } from "@angular/forms";
import { ToastServiceService } from "../service/toast-service.service";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  identity_id;
  identityInvoice;
  invoice: Invoice;
  _postArrayInventary: Inventary[];
  Inventary;
  constructor(
    private inventaryService: InventaryService,
    private httpClient: HttpClient,
    private token: SendToken,
    private snackBar: MatSnackBar,
    private toastServie: ToastServiceService,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
    this.invoice = new Invoice("", "", "", "", "", this.identity_id.businessID);
  }

  ngOnInit() {
    this.getInventaries();
  }
  _postArray: Inventary[];
  public i: number = 0;
  public des: boolean = true;
  ClientName;
  ClientLastName;
  ClientNit;
  InvoiceDate;

  InventaryControl = new FormControl("red");
  addInput() {
    this.i = this.i + 1;

    var table = document.getElementById("dataTable");
    var tr = document.getElementById("trA");
    var tr2 = document.getElementById("trA2");
    var tr22 = document.getElementById("trA3");
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

  enterInvoice() {
    this.userService.invoice(this.invoice).subscribe(data => {
      this.identityInvoice = data.data.insertId;
      localStorage.setItem("invoice", JSON.stringify(this.identityInvoice));
    });
  }
  Quantity;
  Quantity2;
  InventaryID;
  Price;
  Discount = 0;
  SubTotal;
  validation: boolean = true;
  enterInvoiceDetaill() {
    this.httpClient
      .post(
        "http://localhost:4120/invoiceDetail/createInvoiceDetail",
        {
          Quantity: this.Quantity,
          Discount: this.Discount,
          Price: this.Price,
          SubTotal:
            this.Quantity * this.Price -
            this.Quantity * this.Price * this.Discount / 100,
          InventaryID: this.InventaryID,
          BusinessID: this.identity_id.businessID,
          InvoiceID: JSON.parse(localStorage.getItem("invoice"))
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(reponse => {
        console.log("Hola");
      });
  }

  selectPrice(InventaryID) {
    this.Price = this._postArray.find(x => x.InventaryID == InventaryID).Price;
    console.log(this.Price);
  }

  selectQuantity(InventaryID) {
    this.Quantity2 = this._postArray.find(
      x => x.InventaryID == InventaryID
    ).Quantity;

    console.log(this.Quantity2);

    if (this.Quantity > this.Quantity2) {
      this.validation = false;
    //  this.toastServie.Warning("Productos no existentes");
      this.toastServie.Info("Productos no existentes");
      console.log("No existe la cantidad");
    } else {
      this.validation = true;
    }
  }

  getInventaries() {
    this.inventaryService
      .getInventary()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
