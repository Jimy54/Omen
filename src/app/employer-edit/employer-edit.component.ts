import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { EmployersComponent } from "../employers/employers.component";
import { HttpClient } from "@angular/common/http";
import { BranchOfficeService } from "../service/branch-office.service";
import { BranchOffice } from "../models/branchOffice.model";
import { MatSnackBar } from "@angular/material";
import { SendToken } from "../service/SendToken.service";
import { AuthService } from "../service/auth-service.service";

@Component({
  selector: "app-employer-edit",
  templateUrl: "./employer-edit.component.html",
  styleUrls: ["./employer-edit.component.css"]
})
export class EmployerEditComponent implements OnInit {
  _postArrayBranch: BranchOffice[];
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
  identity_id;
  private url: string = "http://localhost:4120/employee";
  BranchOfficeID;
  BussinessID: number;

  constructor(
    private dialogRef: MatDialogRef<EmployersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient,
    private branchOfficeService: BranchOfficeService,
    private snackBar: MatSnackBar,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = userService.getIdentity();
    console.log(data)
  }

  ngOnInit() {
    
    this.getBranchOffice();
  }

  updateEmployee(EmployeeID) {
    this.httpCliente
      .put(
        this.url + "/updateEmployee/" + EmployeeID,
        {
          EmployeeName: this.data.EmployeeName,
          EmployeePhone: this.data.EmployeePhone,
          EmployeeAddress: this.data.EmployeeAddress,
          EmployeeAge: this.data.EmployeeAge,
          EmployeeEmail: this.data.EmployeeEmail,
          EmployeeSalary: this.data.EmployeeSalary,
          EmployeeContratation: this.data.EmployeeContratation,
          EmployeeRol: this.data.EmployeeRol,
          EmployeeUser: this.data.EmployeeUser,
          EmployeePassword: this.data.EmployeePassword,
          BranchOfficeID: this.data.BranchOfficeID,
          BusinessID: this.identity_id.businessID
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(result => {
        console.log("Hola");
        this.snackBar.open("Empleado Actualizado", "Aceptar", {
          duration: 700
        });
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
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
