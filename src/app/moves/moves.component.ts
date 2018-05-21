import { Component, OnInit } from "@angular/core";
import { MoveAddComponent } from "../move-add/move-add.component";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { Moves } from "../models/moves.model";
import { MovesService } from "../service/moves.service";
import { AuthService } from "../service/auth-service.service";
import { MoveEditComponent } from "../move-edit/move-edit.component";
import { MoveDeleteComponent } from "../move-delete/move-delete.component";

@Component({
  selector: "app-moves",
  templateUrl: "./moves.component.html",
  styleUrls: ["./moves.component.css"]
})
export class MovesComponent implements OnInit {
  _postArray: Moves[];
  MoveID;
  Description;
  Total;
  Date;
  BussinesID;

  constructor(
    public dialog: MatDialog,
    private movesService: MovesService,
    private userService: AuthService
  ) {}
  private url: string = "http://localhost:4120/move";

  ngOnInit(): void {
    this.getMove();
  }

  EnterDialog(): void {
    let dialogRef = this.dialog.open(MoveAddComponent, {
      width: "700px",
      height: "300px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMove();
    });
  }

  UpdateDialog(moveData) {
    let dialogRef = this.dialog.open(MoveEditComponent, {
      width: "700px",
      height: "300px",
      data: {
        MoveID: moveData.MoveID,
        Description: moveData.Description,
        Total: moveData.Total,
        Date: moveData.Date,
        BussinesID: moveData.BussinesID
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getMove();
    });
  }

  DeleteDialog(moveData) {
    let dialogRef = this.dialog.open(MoveDeleteComponent, {
      width: "350px",
      height: "350px",
      data: {
        MoveID: moveData.MoveID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMove();
    });
  }

  getMove() {
    this.movesService
      .getMove()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
