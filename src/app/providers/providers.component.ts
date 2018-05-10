import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { ProviderAddComponent } from "../provider-add/provider-add.component";
import { MatSnackBar } from "@angular/material";
import { ProviderService } from "../service/provider.service";
import { Provider } from "../models/provider.model";
import { ProviderEditComponent } from "../provider-edit/provider-edit.component";
import { ProviderDeleteComponent } from "../provider-delete/provider-delete.component";

@Component({
  selector: "app-providers",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.css"]
})
export class ProvidersComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private providerService: ProviderService
  ) {}
  _postArray: Provider[];
  ProviderID = 0;
  ProviderName = "";
  ProviderAddress = "";
  ProviderPhone = "";
  ProviderEmail = "";
  BusinessID = 0;

  ngOnInit() {
    this.getProvider();
  }

  EnterDialog(): void {
    let dialogRef = this.dialog.open(ProviderAddComponent, {
      width: "700px",
      height: "400px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProvider();
    });
  }

  UpdateDialog(providerData) {
    console.log(providerData);
    let dialogRef = this.dialog.open(ProviderEditComponent, {
      width: "500px",
      height: "500px",
      data: {
        ProviderID: providerData.ProviderID,
        ProviderName: providerData.ProviderName,
        ProviderAddress: providerData.ProviderAddress,
        ProviderPhone: providerData.ProviderPhone,
        ProviderEmail: providerData.ProviderEmail,
        BusinessID: providerData.BusinessID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProvider();
    });
  }

  DeleteDialog(providerData) {
    console.log(providerData);
    let dialogRef = this.dialog.open(ProviderDeleteComponent, {
      width: "250px",
      height: "250px",
      data: {
        ProviderID: providerData.ProviderID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProvider();
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

  getProvider(): void {
    this.providerService
      .getProvider()
      .subscribe(
        resultArray => (this._postArray = resultArray),
        error => console.log("Error " + error)
      );
  }
}
