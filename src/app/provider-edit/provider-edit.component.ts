import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { ProvidersComponent } from "../providers/providers.component";
import { ProviderService } from "../service/provider.service";
import { HttpClient } from "@angular/common/http";
import { Provider } from "../models/provider.model";

@Component({
  selector: "app-provider-edit",
  templateUrl: "./provider-edit.component.html",
  styleUrls: ["./provider-edit.component.css"]
})
export class ProviderEditComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ProvidersComponent>,
    private providerService: ProviderService,
    private httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {}

  ProviderID = 0;
  ProviderName = "";
  ProviderAddress = "";
  ProviderPhone = "";
  ProviderEmail = "";
  BusinessID = 0;
  _postArray: Provider[];

  private url: string = "http://localhost:4120/provider";
  ngOnInit() {}

  updateProvider(ProviderID) {
    this.httpClient
      .put(this.url + "/updateProvider/" + ProviderID, {
        ProviderName: this.data.ProviderName,
        ProviderAddress: this.data.ProviderAddress,
        ProviderPhone: this.data.ProviderPhone,
        ProviderEmail: this.data.ProviderEmail,
        BusinessID: 1
      })
      .subscribe(response => {
        this.snackBar.open("Proveedor Actualizado", "Actualizar", {
          duration: 800
        });
        this.getProvider();
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
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
