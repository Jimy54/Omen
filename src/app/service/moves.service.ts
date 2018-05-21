import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Moves } from "../models/moves.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SendToken } from "./SendToken.service";

@Injectable()
export class MovesService {
  constructor(private http: HttpClient, private token: SendToken) {}

  url = "http://localhost:4120/move/listMoves";

  getMove(): Observable<Moves[]> {
    return this.http.get<Moves[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
