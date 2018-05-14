import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BranchOffice } from "../models/branchOffice.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SendToken } from "./SendToken.service";

@Injectable()
export class BranchOfficeService {
  constructor(private http: HttpClient, private token: SendToken) {}

  url = "http://localhost:4120/branchOffice/listBranchOffices";

  getBranchOffice(): Observable<BranchOffice[]> {
    return this.http.get<BranchOffice[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
