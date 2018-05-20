import { Component, OnInit, Inject } from "@angular/core";
import { BranchOfficeComponent } from "../branch-office/branch-office.component";
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOfficeInventaryService } from "../service/branch-office-inventary.service";
import { InventaryService } from "../service/inventary.service";
import { SendToken } from "../service/SendToken.service";
import { AuthService } from "../service/auth-service.service";
import { BranchOffice } from "../models/branchOffice.model";
import { Inventary } from "../models/inventary.model";
import { BranchOfficeInventary } from "../models/branchOfficeInventary.model";

@Component({
  selector: "app-branch-office-inventary-edit",
  templateUrl: "./branch-office-inventary-edit.component.html",
  styleUrls: ["./branch-office-inventary-edit.component.css"]
})
export class BranchOfficeInventaryEditComponent implements OnInit {
  identity_id;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BranchOfficeInventary>,
    private http: HttpClient,
    private branchOfficeService: BranchOfficeService,
    private snackBar: MatSnackBar,
    private branchOfficeInventary: BranchOfficeInventaryService,
    private inventaryService: InventaryService,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
  }

  ngOnInit() {
    this.getBranchOffice();
    this.getInventaries();
  }
  _postArray: BranchOfficeInventary[];
  _postArrayInventary: Inventary[];
  _postArrayBranchOffice: BranchOffice[];
  url = "http://localhost:4120/branchOfficeInventary/updateBranchOfficeInventary/";

  updateInventary(branchOfficeID) {
    this.http
      .put(
        this.url + branchOfficeID,
        {
          Description: this.data.Description,
          Quantity: this.data.Quantity,
          Price: this.data.Price,
          CodeBar: this.data.CodeBar,
          BusinessID: this.identity_id.businessID,
          BranchOfficeID: this.data.BranchOfficeID,
          InventaryID: this.data.InventaryID
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(response => {
        this.snackBar.open("Producto editado", "Aceptar", {
          duration: 700
        });
        this.getBranchOfficeInventary();
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getInventaries() {
    this.inventaryService
      .getInventary()
      .subscribe(
        resultArray => (this._postArrayInventary = resultArray),
        error => console.log("Error " + error)
      );
  }

  getBranchOfficeInventary() {
    this.branchOfficeInventary
      .getBranchOfficeInventary()
      .subscribe(
        resultArray => (this._postArray = resultArray),
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
