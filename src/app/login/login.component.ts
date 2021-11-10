import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse,HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { JwtTokenData } from '../models/jwtToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  userLog = '1';
  user = new User;
  jwtTokenData = new JwtTokenData;
  response:any=[];
  message = ' ';

  constructor(private _service:UserService,private _router:Router) { }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.userLog) ;
    // this._navComponent.changeUserName('guest')
  }

  loginUser(){
    this._service.loginMethod(this.user).subscribe(
      data =>{
        console.log(data);
        this.jwtTokenData = data.body.payload;
        console.log(this.jwtTokenData.mfaEnabled);
        if(this.jwtTokenData.mfaEnabled == "Y"){
          localStorage.setItem('token',data.headers.get("AUTHORIZATION"));
          localStorage.setItem('username',this.user.loginId);
          this._router.navigate(['/mfalogin']);
        }else{
        localStorage.setItem('token',data.headers.get("AUTHORIZATION"));
        localStorage.setItem('username',this.user.loginId);
        this._router.navigate(['/home']);
        }
      },
      error => {
        console.log("error");
        this.message = "bad credentials";
      });
  }


}
