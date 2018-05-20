import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { BranchOfficeInventaryComponent } from "../branch-office-inventary/branch-office-inventary.component";
import { HttpClient } from "@angular/common/http";
import { BranchOfficeInventaryService } from "../service/branch-office-inventary.service";
import { SendToken } from "../service/SendToken.service";
import { BranchOfficeInventary } from "../models/branchOfficeInventary.model";

@Component({
  selector: "app-branch-office-inventary-delete",
  templateUrl: "./branch-office-inventary-delete.component.html",
  styleUrls: ["./branch-office-inventary-delete.component.css"]
})
export class BranchOfficeInventaryDeleteComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<BranchOfficeInventaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient,
    private snackBar: MatSnackBar,
    private branchOfficeInventary: BranchOfficeInventaryService,
    private token: SendToken
  ) {}
  url = "http://localhost:4120/branchOfficeInventary/deleteBranchOfficeInventary/";

  _postArray: BranchOfficeInventary[];
  ngOnInit() {}

  deleteInventary(BrachOfficeInventaryID) {
    this.httpCliente
      .delete(this.url + BrachOfficeInventaryID, {
        headers: this.token.enviarToke()
      })

      .subscribe(response => {
        this.getBranchOfficeInventary();
        this.snackBar.open("Producto Eliminado", "Aceptar", {
          duration: 700
        });
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
}
