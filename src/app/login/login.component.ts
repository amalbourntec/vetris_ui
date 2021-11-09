import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse,HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  userLog = '1';
  user = new User;
  response:any=[];
  token !: string;
  message = ' ';

  constructor(private _service:UserService ) { }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.userLog) ;
    // this._navComponent.changeUserName('guest')
  }

  loginUser(){
    this._service.loginMethod(this.user).subscribe(
      data =>{
        this.token=data.headers.get("AUTHORIZATION");
        // localStorage.setItem('token',this.token);
        localStorage.setItem('token',data.headers.get("AUTHORIZATION"));
        localStorage.setItem('username',this.user.loginId);
        // this._navComponent.changeUserName(this.user.loginId)
        alert("success");
        // this._router.navigate(['/home'])
      },
      error => {
        console.log("error");
        this.message = "bad credentials";
      });
  }


}
