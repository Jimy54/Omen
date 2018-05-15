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
import { CategoryService } from "../service/category.service";
import { Category } from "../models/category.model";
import { SendToken } from "../service/SendToken.service";
import { AuthService } from "../service/auth-service.service";

@Component({
  selector: "app-inventary-add",
  templateUrl: "./inventary-add.component.html",
  styleUrls: ["./inventary-add.component.css"]
})
export class InventaryAddComponent implements OnInit {
  identity_id;
  constructor(
    private dialogRef: MatDialogRef<InventariesComponent>,
    private http: HttpClient,
    private inventaryService: InventaryService,
    private snackBar: MatSnackBar,
    private categoryService: CategoryService,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
  }

  ngOnInit() {
    this.getCategories();
  }
  _postArray: Inventary[];
  _postArrayCategory: Category[];
  InventaryID;
  InventaryDescription = "";
  Quantity = 0;
  Tax = 0;
  Price = 0;
  InventaryImage = "";
  CodeBar;
  BusinessID = 1;
  CategoryID = 1;
  private url = "http://localhost:4120/inventary/";

  onNoClick(): void {
    this.dialogRef.close();
  }

  enterInventary() {
    this.http
      .post(
        this.url + "createInventary",
        {
          InventaryDescription: this.InventaryDescription,
          Quantity: this.Quantity,
          Tax: this.Tax,
          Price: this.Price,
          InventaryImage: "dada",
          CodeBar: this.CodeBar,
          BusinessID: this.identity_id.businessID,
          CategoryID: this.CategoryID
        },
        { headers: this.token.enviarToke() }
      )
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

  getCategories() {
    this.categoryService
      .getCategory()
      .subscribe(
        resultArray => (this._postArrayCategory = resultArray),
        error => console.log("Error " + error)
      );
  }
}
