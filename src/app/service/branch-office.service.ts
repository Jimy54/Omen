import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BranchOffice } from "../models/branchOffice.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SendToken } from "./SendToken.service";
import { AuthService } from "./auth-service.service";

@Injectable()
export class BranchOfficeService {
  identity_id;
  url;
  constructor(
    private http: HttpClient,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = userService.getIdentity();
    this.url =
      "http://localhost:4120/branchOffice/listBranchOffices/" +
      this.identity_id.businessID;
  }

  getBranchOffice(): Observable<BranchOffice[]> {
    return this.http.get<BranchOffice[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
