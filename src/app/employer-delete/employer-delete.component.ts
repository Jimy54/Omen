import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { EmployersComponent } from "../employers/employers.component";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { EmployerService } from "../service/employer.service";
import { Employer } from "../models/employer.model";

@Component({
  selector: "app-employer-delete",
  templateUrl: "./employer-delete.component.html",
  styleUrls: ["./employer-delete.component.css"]
})
export class EmployerDeleteComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EmployersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpCliente: HttpClient,
    private snackBar: MatSnackBar,
    private employerService: EmployerService
  ) {}

  _postArray: Employer[];
  ngOnInit() {}
  private url: string = "http://localhost:4120/employee";

  deleteEmployee(EmployeeID) {
    this.httpCliente
      .delete(this.url + "/deleteEmployee/" + EmployeeID, {})

      .subscribe(response => {
        this.getEmployers();
        this.snackBar.open("Empleado Eliminado", "Aceptar", {
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
}
