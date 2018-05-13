import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { InventariesComponent } from "../inventaries/inventaries.component";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { InventaryService } from "../service/inventary.service";
import { Inventary } from "../models/inventary.model";

@Component({
  selector: "app-inventary-delete",
  templateUrl: "./inventary-delete.component.html",
  styleUrls: ["./inventary-delete.component.css"]
})
export class InventaryDeleteComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<InventariesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient,
    private snackBar: MatSnackBar,
    private inventaryService: InventaryService
  ) {}

  private url = "http://localhost:4120/inventary";

  ngOnInit() {}
  _postArray: Inventary[];

  deleteInventary(InventaryID) {
    this.httpCliente
      .delete(this.url + "/deleteInventary/" + InventaryID, {})

      .subscribe(response => {
        this.getInventaries();
        this.snackBar.open("Producto Eliminado", "Aceptar", {
          duration: 700
        });
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getInventaries() {
    this.inventaryService
      .getInventary()
      .subscribe(
        response => resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
