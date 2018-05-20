import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { InventaryAddComponent } from "../inventary-add/inventary-add.component";
import { InventaryService } from "../service/inventary.service";
import { Inventary } from "../models/inventary.model";
import { CategoryService } from "../service/category.service";
import { Category } from "../models/category.model";
import { FilterInventaryPipe } from "../filter-inventary.pipe";
import { InventaryEditComponent } from "../inventary-edit/inventary-edit.component";
import { InventaryDeleteComponent } from "../inventary-delete/inventary-delete.component";
import { SendToken } from "../service/SendToken.service";
declare var JsBarcode: any;

@Component({
  selector: "app-inventaries",
  templateUrl: "./inventaries.component.html",
  styleUrls: ["./inventaries.component.css"]
})
export class InventariesComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private inventaryService: InventaryService,
    private categoryService: CategoryService,
    private token: SendToken
  ) {}

  search = "Zapatos Nike";
  canvas: HTMLCanvasElement;

  ngOnInit() {
    const data = {};
    this.getInventaries()
    this.inventaryService.getInventary2().subscribe(res => {
      let hola = res["data"];
      console.log(hola);
      let codeBar = hola["data"].map(res => res.CodeBar);
      var splitted = codeBar.join(" ");
      console.log(splitted);
      var a1 = new Array();
      JsBarcode(".barcode").init(); // Create space between the barcodes.render(); // Create space between the barcodes
    });
  }

  _postArray: Inventary[];
  _postArrayCategory: Category[];

  EnterDialog(): void {
    let dialogRef = this.dialog.open(InventaryAddComponent, {
      width: "800px",
      height: "500px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getInventaries();
    });
  }

  UpdateDialog(inventaryData) {
    let dialogRef = this.dialog.open(InventaryEditComponent, {
      width: "800px",
      height: "500px",
      data: {
        InventaryID: inventaryData.InventaryID,
        InventaryDescription: inventaryData.InventaryDescription,
        Quantity: inventaryData.Quantity,
        Tax: inventaryData.Tax,
        Price: inventaryData.Price,
        InventaryImage: "dada",
        CodeBar: inventaryData.CodeBar,
        CategoryID: inventaryData.CategoryID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getInventaries();
    });
  }

  deleteDialog(inventaryData) {
    let dialogRef = this.dialog.open(InventaryDeleteComponent, {
      width: "350px",
      height: "350px",
      data: {
        InventaryID: inventaryData.InventaryID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getInventaries();
    });
  }

  getInventaries(): void {
    this.inventaryService
      .getInventary()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }

  getCategories() {
    this.categoryService
      .getCategory()
      .subscribe(
        resultArray => (this._postArrayCategory = resultArray, JsBarcode(".barcode").init()),
        error => console.log("Error " + error)
      );
  }

  /*
  myFunction() {
    var input, filter, grid, card, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    grid = document.getElementById("grid");
    card = grid.getElementsByTagName("myCard");
    for (i = 0; i < card.length; i++) {
      td = card[i].getElementsByTagName("mat-card-title")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          card[i].style.display = "";
        } else {
          card[i].style.display = "none";
        }
      }
    
  }*/
}
