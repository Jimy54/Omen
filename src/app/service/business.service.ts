import { Injectable } from "@angular/core";
import { BusinessComponent } from "../business/business.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Business } from "../models/business.model";
import { SendToken } from "./SendToken.service";

@Injectable()
export class BusinessService {
  constructor(private http: HttpClient, private token: SendToken) {}
  public identity;

  url = "http://localhost:4120/business/listBusiness";

  getBusiness(): Observable<Business[]> {
    return this.http.get<Business[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }

  getIdentity() {
    var identity = JSON.parse(localStorage.getItem("identity"));
    if (identity != "undefined") {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }
}
