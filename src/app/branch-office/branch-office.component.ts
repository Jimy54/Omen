import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { BranchOfficeAddComponent } from "../branch-office-add/branch-office-add.component";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOffice } from "../models/branchOffice.model";

@Component({
  selector: "app-branch-office",
  templateUrl: "./branch-office.component.html",
  styleUrls: ["./branch-office.component.css"]
})
export class BranchOfficeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private branchOfficeService: BranchOfficeService
  ) {}
  private url: string = "http://localhost:4120/branchOffice";
  _postArray: BranchOffice[];

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
