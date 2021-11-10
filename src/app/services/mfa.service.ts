import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MfaService {

  private httpClient: HttpClient;
  token!:String;

  constructor(private http:HttpClient,httpBackend: HttpBackend) {
    this.httpClient= new HttpClient(httpBackend);
   }

  public mfaLoginMethod(token:any,otp:any){
    res : HttpResponse ;
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('AUTHORIZATION',token)
  .set('otp',otp);
    return this.httpClient.post<HttpResponse<Object>>("http://localhost:8888/vetris-security/v1/users/mfasignon",'',{ headers,observe: "response"}); 
  }

}
