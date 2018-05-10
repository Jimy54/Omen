import { Component, OnInit } from "@angular/core";
import { BranchOfficeComponent } from "../branch-office/branch-office.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOffice } from "../models/BranchOffice.model";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-branch-office-add",
  templateUrl: "./branch-office-add.component.html",
  styleUrls: ["./branch-office-add.component.css"]
})
export class BranchOfficeAddComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<BranchOfficeComponent>,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private branchOfficeService: BranchOfficeService
  ) {}

  private url: string = "http://localhost:4120/branchOffice";
  fbRegistrer: FormGroup;
  BranchOfficeID;
  BranchOfficeName;
  BranchOfficePhone;
  BranchOfficeAddress;
  BusinessID;
  _postArray: BranchOffice[];

  ngOnInit() {
    this.fbRegistrer = this.fb.group({
      BranchOfficeName: ["", Validators.required],
      BranchOfficePhone: ["", Validators.required],
      BranchOfficeAddress: ["", Validators.required]
    });
  }

  enterBranchOffice() {
    this.httpClient
      .post(this.url + "/createBranchOffice", {
        BranchOfficeName: this.BranchOfficeName,
        BranchOfficeAddress: this.BranchOfficeAddress,
        BranchOfficePhone: this.BranchOfficePhone,
        BusinessID: 1
      })
      .subscribe(reponse => {
        this.getBranchOffice();
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.snackBar.open("Sucursal Registrado", "Aceptar", {
      duration: 700
    });
  }

  getBranchOffice() {
    this.branchOfficeService
      .getBranchOffice()
      .subscribe(
        resultArray => this._postArray,
        error => console.log("Error " + error)
      );
  }
}
