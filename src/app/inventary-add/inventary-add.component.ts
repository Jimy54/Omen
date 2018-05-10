import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { InventariesComponent } from "../inventaries/inventaries.component";

@Component({
  selector: "app-inventary-add",
  templateUrl: "./inventary-add.component.html",
  styleUrls: ["./inventary-add.component.css"]
})
export class InventaryAddComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<InventariesComponent>) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
