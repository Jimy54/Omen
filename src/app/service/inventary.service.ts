import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Inventary } from "../models/inventary.model";
import { SendToken } from "./SendToken.service";
import "rxjs/add/operator/map";
@Injectable()
export class InventaryService {
  constructor(private http: HttpClient, private token: SendToken) {}

  url = "http://localhost:4120/inventary/listInventaries";
  url2 = "http://localhost:4120/inventary/listInventaries2";

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
