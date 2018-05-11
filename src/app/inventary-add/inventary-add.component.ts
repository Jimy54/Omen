import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { InventariesComponent } from "../inventaries/inventaries.component";
import { HttpClient } from "@angular/common/http";
import { InventaryService } from "../service/inventary.service";
import { Inventary } from "../models/inventary.model";

@Component({
  selector: "app-inventary-add",
  templateUrl: "./inventary-add.component.html",
  styleUrls: ["./inventary-add.component.css"]
})
export class InventaryAddComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<InventariesComponent>,
    private http: HttpClient,
    private inventaryService: InventaryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}
  _postArray: Inventary[];
  InventaryID;
  InventaryDescription = "";
  Quantity = 0;
  Tax = 0;
  Price = 0;
  InventaryImage = "";
  CodeBar;
  BusinessID = 1;
  CategoryID = 1;
  private url = "http://localhost:4120/inventarY/";

  onNoClick(): void {
    this.dialogRef.close();
  }

  enterInventary() {
    this.http
      .post(this.url + "createInventary", {
        InventaryDescription: this.InventaryDescription,
        Quantity: this.Quantity,
        Tax: this.Tax,
        Price: this.Price,
        InventaryImage: "dada",
        CodeBar: this.CodeBar,
        BusinessID: 1,
        CategoryID: 1
      })
      .subscribe(response => {
        this.snackBar.open("Producto agregado", "Aceptar", {
          duration: 700
        });
        this.getInventaries();
      });
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
