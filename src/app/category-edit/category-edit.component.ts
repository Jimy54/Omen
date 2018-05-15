import { Component, OnInit, Inject } from "@angular/core";
import { CategoryComponent } from "../category/category.component";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { CategoryService } from "../service/category.service";
import { HttpClient } from "@angular/common/http";
import { Category } from "../models/category.model";
import { SendToken } from "../service/SendToken.service";
import { AuthService } from "../service/auth-service.service";

@Component({
  selector: "app-category-edit",
  templateUrl: "./category-edit.component.html",
  styleUrls: ["./category-edit.component.css"]
})
export class CategoryEditComponent implements OnInit {
  identity_id;
  constructor(
    private dialogRef: MatDialogRef<CategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpClient: HttpClient,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
  }

  _postArray: Category[];
  CategoryID;
  CategoryDescription;
  private url: string = "http://localhost:4120/category";

  ngOnInit() {
    this.getCategories();
  }

  updateCategory(CategoryID) {
    this.httpClient
      .put(
        this.url + "/updateCategory/" + CategoryID,
        {
          CategoryDescription: this.data.CategoryDescription,
          BusinessID: this.identity_id.businessID
        },
        {
          headers: this.token.enviarToke()
        }
      )
      .subscribe(response => {
        this.getCategories();
        this.snackBar.open("Categoría Actualizada", "Aceptar", {
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
