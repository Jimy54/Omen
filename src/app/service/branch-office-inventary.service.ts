import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BranchOfficeInventary } from "../models/branchOfficeInventary.model";
import { SendToken } from "./SendToken.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BranchOfficeInventaryService {
  constructor(private token: SendToken, private http: HttpClient) {}

  url = "http://localhost:4120/branchOfficeInventary/listBranchOfficeInventary";

  getBranchOfficeInventary(): Observable<BranchOfficeInventary[]> {
    return this.http.get<BranchOfficeInventary[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
