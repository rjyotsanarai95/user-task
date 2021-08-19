import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Users } from "../models/users";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  usersList: Users[] = [];
  users = [];
  usersbyid = [];
  detailedUserList: Users[] = [];

  constructor(private dataService: UserService, private router: Router) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
      this.getdetailedUsersData();
    });
  }

  getdetailedUsersData() {
    this.usersList = this.users["data"];
  }

  getdetailedUsersDataById() {
    debugger;
    this.detailedUserList = this.usersbyid["data"];
  }

  viewUser(id: number) {
    debugger;

    // this.dataService.getEachUserDetailsById(id).subscribe((data: any[]) => {
    //   console.log(data);
    //   this.usersbyid = data;
    //   this.getdetailedUsersDataById();
    // });

    this.router.navigate(["user/:i", { id: id }]);
  }

  deleteUser(id: number) {
    debugger;
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].id === id) {
        this.usersList.splice(i--, 1);
      }
    }
  }
}
