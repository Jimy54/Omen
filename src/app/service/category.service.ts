import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Category } from "../models/category.model";
import { SendToken } from "./SendToken.service";
import { AuthService } from "./auth-service.service";

@Injectable()
export class CategoryService {
  identity_id;
  url;
  constructor(
    private http: HttpClient,
    private token: SendToken,
    private userService: AuthService
  ) {
    this.identity_id = userService.getIdentity();
    this.url =
      "http://localhost:4120/category/listCategories/" +
      this.identity_id.businessID;
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url, {
      headers: this.token.enviarToke()
    });
  }
}
