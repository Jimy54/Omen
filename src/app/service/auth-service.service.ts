import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Users } from "../models/user.model";

export const TOKEN_NAME: string = "jwt_token";

@Injectable()
export class AuthService {
  public url = "http://localhost:4120";
  public token;
  public identity;
  constructor(public _http: HttpClient) {}

  registrar(user: Users): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.post(this.url + "/user/createUser", params, {
      headers: headers
    });
  }

  login(userData, gettoken = null): Observable<any> {
    if (gettoken != null) {
      userData.gettoken = gettoken;
    }

    let params = JSON.stringify(userData);
    let headers1 = new HttpHeaders().set("Content-Type", "application/json");

    console.log(userData);
    return this._http.post(this.url + "/user/loginUser", params, {
      headers: headers1
    });
  }

  business(userData): Observable<any> {
    let params = JSON.stringify(userData);
    let headers1 = new HttpHeaders()
      .set("Content-Type", "application/json")

    console.log(userData);
    return this._http.post(this.url + "/business/createBusiness", params, {
      headers: headers1
    });
  }

  getToken() {
    let token = localStorage.getItem("token");
    if (token != "undefined") {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
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

  getBusiness(){
    var identity = JSON.parse(localStorage.getItem("business"));
    if (identity != "undefined") {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }
}
