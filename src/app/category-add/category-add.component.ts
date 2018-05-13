import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { CategoryComponent } from "../category/category.component";
import { HttpClient } from "@angular/common/http";
import { CategoryService } from "../service/category.service";
import { Category } from "../models/category.model";
@Component({
  selector: "app-category-add",
  templateUrl: "./category-add.component.html",
  styleUrls: ["./category-add.component.css"]
})
export class CategoryAddComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CategoryComponent>,
    private http: HttpClient,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {}
  private url: string = "http://localhost:4120/category";

  ngOnInit() {}
  CategoryDescription;
  BusinessID;
  _postArray: Category[];

  EnterCategory() {
    this.http
      .post(this.url + "/createCategory", {
        CategoryDescription: this.CategoryDescription,
        BusinessID: 1
      })
      .subscribe(response => {
        this.getCategories();
        this.snackBar.open("Categoría Agregada", "Aceptar", { duration: 700 });
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCategories() {
    this.categoryService
      .getCategory()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
