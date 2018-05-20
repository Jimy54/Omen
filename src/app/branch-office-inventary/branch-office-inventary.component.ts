import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SendToken } from "../service/SendToken.service";
import { MatDialogRef, MatDialog } from "@angular/material";
import { InventaryService } from "../service/inventary.service";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOfficeInventaryAddComponent } from "../branch-office-inventary-add/branch-office-inventary-add.component";
import { BranchOffice } from "../models/branchOffice.model";
import { BranchOfficeInventary } from "../models/branchOfficeInventary.model";
import { BranchOfficeInventaryService } from "../service/branch-office-inventary.service";
import { BranchOfficeEditComponent } from "../branch-office-edit/branch-office-edit.component";
import { BranchOfficeInventaryEditComponent } from "../branch-office-inventary-edit/branch-office-inventary-edit.component";
import { BranchOfficeInventaryDeleteComponent } from "../branch-office-inventary-delete/branch-office-inventary-delete.component";
declare var JsBarcode: any;

@Component({
  selector: "app-branch-office-inventary",
  templateUrl: "./branch-office-inventary.component.html",
  styleUrls: ["./branch-office-inventary.component.css"]
})
export class BranchOfficeInventaryComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private branchOfficeInventary: BranchOfficeInventaryService
  ) {}

  _postArray: BranchOfficeInventary[];
  ngOnInit() {
    this.getBranchOfficeInventary();
    this.branchOfficeInventary.getBranchOfficeInventary().subscribe(res => {
      JsBarcode(".barcode").init();
    });
    JsBarcode(".barcode").init();
  }

  EnterDialog(): void {
    let dialogRef = this.dialog.open(BranchOfficeInventaryAddComponent, {
      width: "800px",
      height: "500px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBranchOfficeInventary();
    });
  }

  UpdateDialog(branchOfficeData): void {
    let dialogRef = this.dialog.open(BranchOfficeInventaryEditComponent, {
      width: "800px",
      height: "500px",
      data: {
        BranchOfficeInventaryID: branchOfficeData.BranchOfficeInventaryID,
        Description: branchOfficeData.Description,
        Quantity: branchOfficeData.Quantity,
        Price: branchOfficeData.Price,
        CodeBar: branchOfficeData.CodeBar,
        BusinessID: branchOfficeData.businessID,
        BranchOfficeID: branchOfficeData.BranchOfficeID,
        InventaryID: branchOfficeData.InventaryID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBranchOfficeInventary();
    });
  }

  DeleteDiaglog(branchOfficeInventaryData): void {
    let dialogRef = this.dialog.open(BranchOfficeInventaryDeleteComponent, {
      width: "300px",
      height: "300px",
      data: {
        BranchOfficeInventaryID:
          branchOfficeInventaryData.BranchOfficeInventaryID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBranchOfficeInventary();
    });
  }

  getBranchOfficeInventary() {
    this.branchOfficeInventary
      .getBranchOfficeInventary()
      .subscribe(
        resultArray => (
          (this._postArray = resultArray), JsBarcode(".barcode").init()
        ),
        error => console.log("Error " + error)
      );
  }
}
