import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Users } from "../models/users";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  usersbyid = [];
  detailedUserList: Users[] = [];
  id: any;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;

  constructor(
    private dataService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    debugger;

    this.id = this.route.snapshot.paramMap.get("id");
    this.viewUser();
  }

  viewUser() {
    debugger;

    this.dataService
      .getEachUserDetailsById(this.id)
      .subscribe((data: any[]) => {
        console.log(data);
        this.usersbyid = data;
        this.getdetailedUsersDataById();
      });
    // if (this.getdetailedUsersData != null) {
    //   this.router.navigate(["user/:i", { state: this.detailedUserList }]);
    // }
  }

  getdetailedUsersDataById() {
    debugger;
    this.detailedUserList = this.usersbyid["data"];
    this.avatar = this.detailedUserList["avatar"];
    this.email = this.detailedUserList["email"];
    this.first_name = this.detailedUserList["first_name"];
    this.last_name = this.detailedUserList["last_name"];
  }
}
