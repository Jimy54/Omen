import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Moves } from "../models/moves.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SendToken } from "./SendToken.service";
import { AuthService } from "./auth-service.service";

@Injectable()
export class MovesService {
  identity_id;
  url;
  constructor(
    private http: HttpClient,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = this.userService.getIdentity();
    this.url =
      "http://localhost:4120/move/listMoves/" + this.identity_id.businessID;
  }

  getMove(): Observable<Moves[]> {
    return this.http.get<Moves[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
