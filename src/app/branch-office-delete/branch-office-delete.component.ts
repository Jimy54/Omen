import { Component, OnInit, Inject } from "@angular/core";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOfficeComponent } from "../branch-office/branch-office.component";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { BranchOffice } from "../models/branchOffice.model";
import { SendToken } from "../service/SendToken.service";

@Component({
  selector: "app-branch-office-delete",
  templateUrl: "./branch-office-delete.component.html",
  styleUrls: ["./branch-office-delete.component.css"]
})
export class BranchOfficeDeleteComponent implements OnInit {
  constructor(
    private branchOfficeService: BranchOfficeService,
    private dialogRef: MatDialogRef<BranchOfficeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient,
    private snackBar: MatSnackBar,
    private token: SendToken
  ) {}
  private url: string = "http://localhost:4120/branchOffice";
  ngOnInit() {}
  BranchOfficeID;
  _postArray: BranchOffice[];
  deleteBranchOffice(BranchOfficeID) {
    this.httpCliente
      .delete(this.url + "/deleteBranchOffice/" + BranchOfficeID, {
        headers: this.token.enviarToke()
      })
      .subscribe(response => {
        this.getBranchOffice();
        this.snackBar.open("Sucursal Eliminada", "Aceptar", {
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
