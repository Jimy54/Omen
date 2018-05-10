import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, NavigationStart } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { EmployerAddComponent } from "../employer-add/employer-add.component";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { EmployerService } from "../service/employer.service";
import { Employer } from "../models/employer.model";
import { MatSnackBar } from "@angular/material";
import { EmployerEditComponent } from "../employer-edit/employer-edit.component";
import { EmployerDeleteComponent } from "../employer-delete/employer-delete.component";

const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
@Component({
  selector: "app-employers",
  templateUrl: "./employers.component.html",
  styleUrls: ["./employers.component.css"]
})
export class EmployersComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private employerService: EmployerService
  ) {}

  _postArray: Employer[];
  EmployeeID = 0;
  EmployeeName = "";
  EmployeePhone = "";
  EmployeeAddress = "";
  EmployeeEmail = "";
  EmployeeAge = 0;
  EmployeeSalary = 0;
  EmployeeContratation: Date;
  EmployeeRol = "";
  EmployeeUser;
  EmployeePassword;
  BranchOfficeID = 0;
  BusinessID;

  ngOnInit() {
    this.getEmployers();
  }

  EnterDialog(): void {
    let dialogRef = this.dialog.open(EmployerAddComponent, {
      width: "1500px",
      height: "700px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmployers();
    });
  }

  myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  UpdateDialog(employeeData) {
    let dialogRef = this.dialog.open(EmployerEditComponent, {
      width: "1500px",
      height: "700px",
      data: {
        EmployeeID: employeeData.EmployeeID,
        EmployeeName: employeeData.EmployeeName,
        EmployeePhone: employeeData.EmployeePhone,
        EmployeeAddress: employeeData.EmployeeAddress,
        EmployeeEmail: employeeData.EmployeeEmail,
        EmployeeAge: employeeData.EmployeeAge,
        EmployeeSalary: employeeData.EmployeeSalary,
        EmployeeContratation: employeeData.EmployeeContratation,
        EmployeeRol: employeeData.EmployeeRol,
        EmployeeUser: employeeData.EmployeeUser,
        EmployeePassword: employeeData.EmployeePassword,
        BranchOfficeID: employeeData.BranchOfficeID,
        BusinessID: 1
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmployers();
    });
  }

  deleteDialog(employeeData) {
    let dialogRef = this.dialog.open(EmployerDeleteComponent, {
      width: "350px",
      height: "350px",
      data: {
        EmployeeID: employeeData.EmployeeID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmployers();
    });
  }

  getEmployers(): void {
    this.employerService
      .getEmployer()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
