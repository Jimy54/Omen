import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { BranchOfficeAddComponent } from "../branch-office-add/branch-office-add.component";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOffice } from "../models/branchOffice.model";
import { BranchOfficeEditComponent } from "../branch-office-edit/branch-office-edit.component";
import { BranchOfficeDeleteComponent } from "../branch-office-delete/branch-office-delete.component";
import { AuthService } from "../service/auth-service.service";

@Component({
  selector: "app-branch-office",
  templateUrl: "./branch-office.component.html",
  styleUrls: ["./branch-office.component.css"]
})
export class BranchOfficeComponent implements OnInit {
  _postArray: BranchOffice[];
  BranchOfficeID;
  BranchOfficeName;
  BranchOfficePhone;
  BranchOfficeAddress;
  identity_id;
  constructor(
    private dialog: MatDialog,
    private branchOfficeService: BranchOfficeService,
    private userService: AuthService
  ) {}
  private url: string = "http://localhost:4120/branchOffice";

  ngOnInit(): void {
    this.getBranchOffice();
  }

  EnterDialog() {
    let dialogRef = this.dialog.open(BranchOfficeAddComponent, {
      width: "800px",
      height: "400px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBranchOffice();
    });
  }

  UpdateDialog(branchOfficeData) {
    let dialogRef = this.dialog.open(BranchOfficeEditComponent, {
      width: "800px",
      height: "400px",
      data: {
        BranchOfficeID: branchOfficeData.BranchOfficeID,
        BranchOfficeName: branchOfficeData.BranchOfficeName,
        BranchOfficePhone: branchOfficeData.BranchOfficePhone,
        BranchOfficeAddress: branchOfficeData.BranchOfficeAddress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBranchOffice();
    });
  }

  DeleteDialog(branchOfficeData) {
    let dialogRef = this.dialog.open(BranchOfficeDeleteComponent, {
      width: "350px",
      height: "350px",
      data: {
        BranchOfficeID: branchOfficeData.BranchOfficeID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBranchOffice();
    });
  }

  myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  getBranchOffice() {
    this.branchOfficeService
      .getBranchOffice()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
