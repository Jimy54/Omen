import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Employer } from "../models/employer.model";
import { SendToken } from "./SendToken.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth-service.service";

@Injectable()
export class EmployerService {
  identity_id;
  url;
  url2;
  constructor(
    private http: HttpClient,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = userService.getIdentity();
    this.url =
      "http://localhost:4120/employee/listEmployees/" +
      this.identity_id.businessID;
    this.url2 =
      "http://localhost:4120/employee/listEmployees2/" +
      this.identity_id.businessID;
  }

  getEmployer(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }

  getEmployer2() {
    return this.http
      .get(this.url2, {
        headers: this.token.enviarToke()
      })
      .map(result => result);
  }
}
