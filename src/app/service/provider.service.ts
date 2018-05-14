import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Provider } from "../models/provider.model";
import { SendToken } from "./SendToken.service";

@Injectable()
export class ProviderService {
  constructor(private http: HttpClient, private token: SendToken) {}

  url = "http://localhost:4120/provider/listProviders";

  getProvider(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
