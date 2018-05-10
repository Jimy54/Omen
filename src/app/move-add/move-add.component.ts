import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MovesComponent } from "../moves/moves.component";

@Component({
  selector: "app-move-add",
  templateUrl: "./move-add.component.html",
  styleUrls: ["./move-add.component.css"]
})
export class MoveAddComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<MovesComponent>) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
