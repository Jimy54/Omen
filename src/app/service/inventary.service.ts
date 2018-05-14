import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Inventary } from "../models/inventary.model";
import { SendToken } from "./SendToken.service";

@Injectable()
export class InventaryService {
  constructor(private http: HttpClient, private token: SendToken) {}

  url = "http://localhost:4120/inventary/listInventaries";

  getInventary(): Observable<Inventary[]> {
    return this.http.get<Inventary[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
