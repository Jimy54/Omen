import { Component, OnInit, Inject } from "@angular/core";
import { BranchOffice } from "../models/branchOffice.model";
import { BranchOfficeService } from "../service/branch-office.service";
import { HttpClient } from "@angular/common/http";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { BranchOfficeComponent } from "../branch-office/branch-office.component";
import { SendToken } from "../service/SendToken.service";

@Component({
  selector: "app-branch-office-edit",
  templateUrl: "./branch-office-edit.component.html",
  styleUrls: ["./branch-office-edit.component.css"]
})
export class BranchOfficeEditComponent implements OnInit {
  constructor(
    private branchOfficeService: BranchOfficeService,
    private dialogRef: MatDialogRef<BranchOfficeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient,
    private snackBar: MatSnackBar,
    private token: SendToken
  ) {}
  private url: string = "http://localhost:4120/branchOffice";
  BranchOfficeID;
  BranchOfficeName;
  BranchOfficePhone;
  BranchOfficeAddress;
  BusinessID;
  _postArray: BranchOffice;
  ngOnInit() {}

  updateBranchOffice(BranchOfficeID) {
    this.httpCliente
      .put(
        this.url + "/updateBranchOffice/" + BranchOfficeID,
        {
          BranchOfficeName: this.data.BranchOfficeName,
          BranchOfficePhone: this.data.BranchOfficePhone,
          BranchOfficeAddress: this.data.BranchOfficeAddress,
          BusinessID: 1
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(response => {
        this.getBranchOffice();
        this.snackBar.open("Sucursal Actualizada", "Aceptar", {
          duration: 700
        });
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getBranchOffice() {
    this.branchOfficeService
      .getBranchOffice()
      .subscribe(
        resultArray => this._postArray,
        error => console.log("Error " + error)
      );
  }
}
