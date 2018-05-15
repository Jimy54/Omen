import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ProvidersComponent } from "../providers/providers.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MatSnackBar } from "@angular/material";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProviderService } from "../service/provider.service";
import { Provider } from "../models/provider.model";
import { SendToken } from "../service/SendToken.service";
import { AuthService } from "../service/auth-service.service";

const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
@Component({
  selector: "app-provider-add",
  templateUrl: "./provider-add.component.html",
  styleUrls: ["./provider-add.component.css"]
})
export class ProviderAddComponent implements OnInit {
  identity_id;
  constructor(
    private dialogRef: MatDialogRef<ProvidersComponent>,
    private snackBar: MatSnackBar,
    private providerService: ProviderService,
    public httpCliente: HttpClient,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
  }
  ProviderName;
  ProviderAddress;
  ProviderPhone;
  ProviderEmail;
  BusinessID;
  _postArray: Provider[];

  private url: string = "http://localhost:4120/provider";

  ngOnInit() {}

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern(emailPattern)
  ]);

  enterProvider() {
    this.httpCliente
      .post(
        this.url + "/createProvider",
        {
          ProviderName: this.ProviderName,
          ProviderAddress: this.ProviderAddress,
          ProviderPhone: this.ProviderPhone,
          ProviderEmail: this.ProviderEmail,
          BusinessID: this.identity_id.businessID
        },
        { headers: this.token.enviarToke() }
      )
      .subscribe(response => {
        this.getProvider();
        this.snackBar.open("Proveedor Registrado", "Aceptar", {
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
