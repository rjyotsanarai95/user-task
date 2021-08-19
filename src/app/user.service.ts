import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private REST_API_SERVER = "https://reqres.in/api/users";

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    debugger;
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getEachUserDetailsById(id) {
    debugger;
    return this.httpClient.get(this.REST_API_SERVER + "/" + id);
  }
}
