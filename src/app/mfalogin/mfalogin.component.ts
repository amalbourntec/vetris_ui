import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mfalogin',
  templateUrl: './mfalogin.component.html',
  styleUrls: ['./mfalogin.component.scss']
})
export class MfaloginComponent implements OnInit {

  otp!:any;
  token:any;
  constructor(private _router : Router,
    private _service:UserService) { }

  ngOnInit(): void {
  }

  doMfaLogin(){
    this._service.mfaLoginMethod(localStorage.getItem('token'),this.otp).subscribe(
      data =>{
        this.token = data.headers.get("AUTHORIZATION");

        localStorage.setItem('token',this.token);
        this._router.navigate(['/home']);
      },
      error => {
        console.log("error");
      });
  }

}
