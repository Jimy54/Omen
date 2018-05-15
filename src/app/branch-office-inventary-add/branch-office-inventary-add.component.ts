import { Component, OnInit } from "@angular/core";
import { SendToken } from "../service/SendToken.service";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogRef, MatSnackBar } from "@angular/material";
import { BranchOfficeComponent } from "../branch-office/branch-office.component";
import { InventaryService } from "../service/inventary.service";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOfficeInventary } from "../models/branchOfficeInventary.model";
import { Inventary } from "../models/inventary.model";
import { BranchOffice } from "../models/branchOffice.model";
import { BranchOfficeInventaryService } from "../service/branch-office-inventary.service";
import { AuthService } from "../service/auth-service.service";

@Component({
  selector: "app-branch-office-inventary-add",
  templateUrl: "./branch-office-inventary-add.component.html",
  styleUrls: ["./branch-office-inventary-add.component.css"]
})
export class BranchOfficeInventaryAddComponent implements OnInit {
  identity_id;
  constructor(
    private httpClient: HttpClient,
    private token: SendToken,
    private dialogRef: MatDialogRef<BranchOfficeComponent>,
    private branchOfficeInventary: BranchOfficeInventaryService,
    private inventaryService: InventaryService,
    private branchOfficeService: BranchOfficeService,
    private snackBar: MatSnackBar,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
  }

  url = "http://localhost:4120/branchOfficeInventary/createBranchOfficeInventary";
  _postArray: BranchOfficeInventary[];
  _postArrayInventary: Inventary[];
  _postArrayBranchOffice: BranchOffice[];

  Description = "";
  Quantity = 0;
  Price = 0;
  CodeBar;
  BusinessID = 1;
  BranchOfficeID = 1;
  InventaryID;

  ngOnInit() {
    this.getBranchOffice();
    this.getInventaries();
  }

  enterBranchOfficeInventary() {
    this.httpClient
      .post(
        this.url,
        {
          Description: this.Description,
          Quantity: this.Quantity,
          Price: this.Price,
          CodeBar: this.CodeBar,
          BusinessID: this.identity_id.businessID,
          BranchOfficeID: this.BranchOfficeID,
          InventaryID: this.InventaryID
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(response => {
        this.snackBar.open("Producto agregado", "Aceptar", {
          duration: 700
        });
        this.getBranchOfficeInventary();
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getBranchOfficeInventary() {
    this.branchOfficeInventary
      .getBranchOfficeInventary()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }

  getInventaries() {
    this.inventaryService
      .getInventary()
      .subscribe(
        resultArray => (this._postArrayInventary = resultArray),
        error => console.log("Error " + error)
      );
  }

  getBranchOffice() {
    this.branchOfficeService
      .getBranchOffice()
      .subscribe(
        resultArray => (this._postArrayBranchOffice = resultArray),
        error => console.log("Error " + error)
      );
  }
}
