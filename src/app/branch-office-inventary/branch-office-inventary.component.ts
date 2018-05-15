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

  getBranchOfficeInventary() {
    this.branchOfficeInventary
      .getBranchOfficeInventary()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
