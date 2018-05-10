import { Component, OnInit } from "@angular/core";
import { MoveAddComponent } from "../move-add/move-add.component";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-moves",
  templateUrl: "./moves.component.html",
  styleUrls: ["./moves.component.css"]
})
export class MovesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  EnterDialog(): void {
    let dialogRef = this.dialog.open(MoveAddComponent, {
      width: "700px",
      height: "300px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
