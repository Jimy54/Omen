import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MovesComponent } from "../moves/moves.component";
import { Moves } from "../models/moves.model";
import { MovesService } from "../service/moves.service";
import { MatSnackBar } from "@angular/material";
import { SendToken } from "../service/SendToken.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-move-delete",
  templateUrl: "./move-delete.component.html",
  styleUrls: ["./move-delete.component.css"]
})
export class MoveDeleteComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<MovesComponent>,
    private httpClient: HttpClient,
    private movesService: MovesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private token: SendToken
  ) {}

  private url: string = "http://localhost:4120/move";

  _postArray: Moves[];
  MoveID;

  ngOnInit() {}

  deleteMove(moveID) {
    this.httpClient
      .delete(this.url + "/deleteMove/" + moveID, {
        headers: this.token.enviarToke()
      })
      .subscribe(response => {
        this.getMove();
        this.snackBar.open("Movimiento Eliminado", "Aceptar", {
          duration: 700
        });
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getMove() {
    this.movesService
      .getMove()
      .subscribe(
        resultArray => this._postArray,
        error => console.log("Error" + error)
      );
  }
}
