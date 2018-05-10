import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { InventaryAddComponent } from "../inventary-add/inventary-add.component";

@Component({
  selector: "app-inventaries",
  templateUrl: "./inventaries.component.html",
  styleUrls: ["./inventaries.component.css"]
})
export class InventariesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  EnterDialog(): void {
    let dialogRef = this.dialog.open(InventaryAddComponent, {
      width: "800px",
      height: "500px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
