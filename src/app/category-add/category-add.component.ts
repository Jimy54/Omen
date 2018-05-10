import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CategoryComponent } from "../category/category.component";
@Component({
  selector: "app-category-add",
  templateUrl: "./category-add.component.html",
  styleUrls: ["./category-add.component.css"]
})
export class CategoryAddComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<CategoryComponent>) {}
  private url:string="http://localhost:4120/category"


  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
