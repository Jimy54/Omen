import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProviderService } from "../service/provider.service";
import { Provider } from "../models/provider.model";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { ProvidersComponent } from "../providers/providers.component";
import { SendToken } from "../service/SendToken.service";

@Component({
  selector: "app-provider-delete",
  templateUrl: "./provider-delete.component.html",
  styleUrls: ["./provider-delete.component.css"]
})
export class ProviderDeleteComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ProvidersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpClient: HttpClient,
    private providerService: ProviderService,
    private snackBar: MatSnackBar,
    private token: SendToken
  ) {}

  ngOnInit() {}
  private url: string = "http://localhost:4120/provider";
  _postArray: Provider[];
  ProviderID = 0;

  deleteProvider(ProviderID) {
    this.httpClient
      .delete(this.url + "/deleteProvider/" + ProviderID, {
        headers: this.token.enviarToke()
      })
      .subscribe(response => {
        this.getProvider();
        this.snackBar.open("Proveedor Eliminado", "Aceptar", {
          duration: 700
        });
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
