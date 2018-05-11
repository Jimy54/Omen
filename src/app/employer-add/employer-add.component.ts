import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EmployersComponent } from "../employers/employers.component";
import { Router, NavigationStart } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { EmployerService } from "../service/employer.service";
import { Employer } from "../models/employer.model";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOffice } from "../models/branchOffice.model";

const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
@Component({
  selector: "app-employer-add",
  templateUrl: "./employer-add.component.html",
  styleUrls: ["./employer-add.component.css"]
})
export class EmployerAddComponent implements OnInit {
  hide: true;
  _postArray: Employer[];
  _postArrayBranch: BranchOffice[];

  EmployeeID = 0;
  EmployeeName = "";
  EmployeePhone = "";
  EmployeeAddress = "";
  EmployeeEmail = "";
  EmployeeAge = 0;
  EmployeeSalary = 0;
  EmployeeContration: Date;
  EmployeeRol = "";
  EmployeeUser;
  EmployeePassword;

  BranchOfficeID: number;
  BussinessID: number;

  fbRegistrer: FormGroup;
  private url: string = "http://localhost:4120/employee";

  constructor(
    private fb: FormBuilder,
    private employerService: EmployerService,
    private branchOfficeService: BranchOfficeService,
    public httpCliente: HttpClient,
    private dialogRef: MatDialogRef<EmployersComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fbRegistrer = this.fb.group({
      EmployeeName: [],
      EmployeePhone: [],
      EmployeeAddress: [],
      EmployeeAge: [],
      EmployeeSalary: [],
      EmployeeContration: [],
      EmployeeRol: [],
      EmployeeEmail: [
        "",
        [Validators.required, Validators.pattern(emailPattern)]
      ],
      EmployeeUser: ["", Validators.required],
      EmployeePassword: ["", Validators.required],
      BranchOfficeID: 1,
      BussinessID: 1
    });

    this.getBranchOffice();
  }

  enterEmployer() {
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    this.httpCliente
      .post(
        this.url + "/createEmployee",
        {
          EmployeeName: this.EmployeeName,
          EmployeePhone: this.EmployeePhone,
          EmployeeAddress: this.EmployeeAddress,
          EmployeeAge: this.EmployeeAge,
          EmployeeEmail: this.EmployeeEmail,
          EmployeeSalary: this.EmployeeSalary,
          EmployeeContratation: this.EmployeeContration,
          EmployeeRol: this.EmployeeRol,
          EmployeeUser: this.EmployeeUser,
          EmployeePassword: this.EmployeePassword,
          BranchOfficeID: this.BranchOfficeID,
          BusinessID: 1
        },
        { headers: headers }
      )
      .subscribe(response => {
        this.getEmployers();
        this.snackBar.open("Empleado Registrado", "Aceptar", {
          duration: 700
        });
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getEmployers(): void {
    this.employerService
      .getEmployer()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }

  getBranchOffice(): void {
    this.branchOfficeService
      .getBranchOffice()
      .subscribe(
        resultArray => (this._postArrayBranch = resultArray),
        error => console.log("Error " + error)
      );
  }
}
