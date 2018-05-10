import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Provider } from "../models/provider.model";

@Injectable()
export class ProviderService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:4120/provider/listProviders";

  getProvider(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url);
  }
}
