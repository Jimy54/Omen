import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { CategoryAddComponent } from "../category-add/category-add.component";
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  EnterDialog(): void {
    let dialogRef = this.dialog.open(CategoryAddComponent, {
      width: "700px",
      height: "400px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
