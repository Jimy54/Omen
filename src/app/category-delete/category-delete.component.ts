import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CategoryComponent } from "../category/category.component";
import { CategoryService } from "../service/category.service";
import { Category } from "../models/category.model";

@Component({
  selector: "app-category-delete",
  templateUrl: "./category-delete.component.html",
  styleUrls: ["./category-delete.component.css"]
})
export class CategoryDeleteComponent implements OnInit {
  _postArray: Category[];
  constructor(
    private dialogRef: MatDialogRef<CategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient,
    private snackBar: MatSnackBar,
    private categoryService: CategoryService
  ) {}

  private url = "http://localhost:4120/category/";
  ngOnInit() {}

  deleteCategory(CategoryID) {
    this.httpCliente
      .delete(this.url + "deleteCategory/" + CategoryID)
      .subscribe(reponse => {
        this.getCategories();
        this.snackBar.open("Categoría Eliminada", "Aceptar", {
          duration: 700
        });
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
