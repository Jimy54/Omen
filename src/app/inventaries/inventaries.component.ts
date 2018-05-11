import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { InventaryAddComponent } from "../inventary-add/inventary-add.component";
import { InventaryService } from "../service/inventary.service";
import { Inventary } from "../models/inventary.model";

@Component({
  selector: "app-inventaries",
  templateUrl: "./inventaries.component.html",
  styleUrls: ["./inventaries.component.css"]
})
export class InventariesComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private inventaryService: InventaryService
  ) {}

  ngOnInit() {
    this.getInventaries();
  }

  _postArray: Inventary[];

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

  getInventaries(): void {
    this.inventaryService
      .getInventary()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
