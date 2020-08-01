import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  users: User[];

  constructor(private usuService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.usuService.getallUsers().subscribe(
      (apiusers: User[]) => { this.users = apiusers },
      (err: any) => { console.log(err); }

    );

  }

  back(): void {
    this.router.navigate(["user-interface"]);
  }
}