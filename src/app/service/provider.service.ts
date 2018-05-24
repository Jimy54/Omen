import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Provider } from "../models/provider.model";
import { SendToken } from "./SendToken.service";
import { AuthService } from "./auth-service.service";

@Injectable()
export class ProviderService {
  identity_id;
  url;
  constructor(
    private http: HttpClient,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = userService.getIdentity();

    this.url =
      "http://localhost:4120/provider/listProviders/" +
      this.identity_id.businessID;
  }

  getProvider(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
