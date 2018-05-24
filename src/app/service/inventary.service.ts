import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Inventary } from "../models/inventary.model";
import { SendToken } from "./SendToken.service";
import "rxjs/add/operator/map";
import { AuthService } from "./auth-service.service";
@Injectable()
export class InventaryService {
  identity_id;
  url;
  url2;
  constructor(
    private http: HttpClient,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
    this.url =
      "http://localhost:4120/inventary/listInventaries/" +
      this.identity_id.businessID;
    this.url2 =
      "http://localhost:4120/inventary/listInventaries2/" +
      this.identity_id.businessID;
  }

  getInventary(): Observable<Inventary[]> {
    return this.http.get<Inventary[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }

  getInventaryPrice(): Observable<Inventary> {
    return this.http.get<Inventary>(this.url, {
      headers: this.token.enviarToke()
    });
  }
  getInventary2() {
    return this.http
      .get(this.url2, {
        headers: this.token.enviarToke()
      })
      .map(result => result);
  }

  getInventaryPrice2() {
    return this.http
      .get(this.url2, {
        headers: this.token.enviarToke()
      })
      .map(result => result);
  }
}
