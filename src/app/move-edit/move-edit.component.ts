import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MovesComponent } from "../moves/moves.component";
import { Moves } from "../models/moves.model";
import { MovesService } from "../service/moves.service";
import { AuthService } from "../service/auth-service.service";
import { MatSnackBar } from "@angular/material";
import { SendToken } from "../service/SendToken.service";
import { HttpClient } from "@angular/common/http";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-move-edit",
  templateUrl: "./move-edit.component.html",
  styleUrls: ["./move-edit.component.css"]
})
export class MoveEditComponent implements OnInit {
  identity_id;
  constructor(
    private dialogRef: MatDialogRef<MovesComponent>,
    private httpClient: HttpClient,
    private movesService: MovesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
  }

  private url: string = "http://localhost:4120/move";

  _postArray: Moves[];
  MoveID;
  Description;
  Total;
  Date;
  BusinessID;

  ngOnInit() {}

  updateMoves(MoveID) {
    this.httpClient
      .put(
        this.url + "/updateMove/" + MoveID,
        {
          Description: this.data.Description,
          Total: this.data.Total,
          Date: this.data.Date,
          BusinessID: this.identity_id.businessID
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(response => {
        this.getMove();
        this.snackBar.open("Movimiento Actualizado", "Aceptar", {
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
