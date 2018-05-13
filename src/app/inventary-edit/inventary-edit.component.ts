import { Component, OnInit, Inject } from "@angular/core";
import { Inventary } from "../models/inventary.model";
import { Category } from "../models/category.model";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { InventariesComponent } from "../inventaries/inventaries.component";
import { HttpClient } from "@angular/common/http";
import { InventaryService } from "../service/inventary.service";
import { CategoryService } from "../service/category.service";

@Component({
  selector: "app-inventary-edit",
  templateUrl: "./inventary-edit.component.html",
  styleUrls: ["./inventary-edit.component.css"]
})
export class InventaryEditComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<InventariesComponent>,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private inventaryService: InventaryService,
    private categoryService: CategoryService
  ) {}
  _postArray: Inventary[];
  _postArrayCategory: Category[];
  InventaryID=0;
  InventaryDescription = "";
  Quantity = 0;
  Tax = 0;
  Price = 0;
  InventaryImage = "";
  CodeBar;
  BusinessID = 1;
  CategoryID = 1;
  private url = "http://localhost:4120/inventary/";

  ngOnInit() {
    this.getCategories();
    this.getInventaries();
  }

  updateInventary(InventaryID) {
    this.httpClient
      .put(this.url + "updateInventary/" + InventaryID, {
        InventaryDescription: this.data.InventaryDescription,
        Quantity: this.data.Quantity,
        Tax: this.data.Tax,
        Price: this.data.Price,
        InventaryImage: "dada",
        CodeBar: this.data.CodeBar,
        BusinessID: 1,
        CategoryID: this.data.CategoryID
      })
      .subscribe(result => {
        this.getInventaries();
        this.snackBar.open("Empleado Actualizado", "Aceptar", {
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

  getCategories() {
    this.categoryService
      .getCategory()
      .subscribe(
        resultArray => (this._postArrayCategory = resultArray),
        error => console.log("Error " + error)
      );
  }
}
