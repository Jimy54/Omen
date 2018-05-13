import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { CategoryAddComponent } from "../category-add/category-add.component";
import { CategoryService } from "../service/category.service";
import { Category } from "../models/category.model";
import { CategoryEditComponent } from "../category-edit/category-edit.component";
import { CategoryDeleteComponent } from "../category-delete/category-delete.component";
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getCategories();
  }
  _postArray: Category[];
  CategoryID;
  CategoryDescription;
  BusinessID;
  EnterDialog(): void {
    let dialogRef = this.dialog.open(CategoryAddComponent, {
      width: "700px",
      height: "400px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategories();
    });
  }

  UpdateDialog(categoryData) {
    let dialogRef = this.dialog.open(CategoryEditComponent, {
      width: "700px",
      height: "400px",
      data: {
        CategoryID: categoryData.CategoryID,
        CategoryDescription: categoryData.CategoryDescription,
        BusinessID: 1
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategories();
    });
  }

  DeleteDialog(categoryData) {
    let dialogRef = this.dialog.open(CategoryDeleteComponent, {
      width: "700px",
      height: "400px",
      data: {
        CategoryID: categoryData.CategoryID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategories();
    });
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
