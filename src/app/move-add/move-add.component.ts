import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { MovesComponent } from "../moves/moves.component";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../service/auth-service.service";
import { SendToken } from "../service/SendToken.service";
import { MovesService } from "../service/moves.service";
import { Moves } from "../models/moves.model";

@Component({
  selector: "app-move-add",
  templateUrl: "./move-add.component.html",
  styleUrls: ["./move-add.component.css"]
})
export class MoveAddComponent implements OnInit {
  fbRegistrer: FormGroup;
  MoveID;
  Description;
  Total;
  Date;
  BusinessID;
  _postArray: Moves[];
  identity_id;
  identityBusinessID;
  constructor(
    private dialogRef: MatDialogRef<MovesComponent>,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private movesService: MovesService,
    private userService: AuthService,
    private token: SendToken
  ) {
    this.identity_id = this.userService.getIdentity();
    this.identityBusinessID = this.userService.getBusiness();
  }

  private url: string = "http://localhost:4120/move";

  ngOnInit() {
    this.fbRegistrer = this.fb.group({
      Description: ["", Validators.required],
      Total: ["", Validators.required],
      Date: ["", Validators.required]
    });
  }

  enterMoves() {
    this.httpClient
      .post(
        this.url + "/createMove",
        {
          Description: this.Description,
          Total: this.Total,
          Date: this.Date,
          BusinessID: this.identity_id.businessID
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(response => {
        this.getMove();
        this.snackBar.open("Movimiento Registrado", "Aceptar", {
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
