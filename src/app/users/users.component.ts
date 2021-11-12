import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[];
  title="User Data";
  constructor(private _router : Router,
    private _service:UserService) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this._service.getData(localStorage.getItem('token')).subscribe(
      data =>{
        console.log("indie");
        this.users=data.payload;
        console.log(this.users);
      },
      error => {
        console.log("error");
      });
  }
}
