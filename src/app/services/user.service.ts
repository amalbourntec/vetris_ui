import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient: HttpClient;
  token!:String;

  constructor(private http:HttpClient,httpBackend: HttpBackend) {
    this.httpClient= new HttpClient(httpBackend);
   }
  
  public loginMethod(user : User):Observable<any>{
    console.log(user.loginId);
    console.log(user.password);
    // this.authenticate(user.loginId,user.password)
    console.log("called authenticate");
    res : HttpResponse ;
    const headers = new HttpHeaders()
    .set('Authorization','Basic ' + btoa(user.loginId + ':' + user.password));
    return this.httpClient.post<HttpResponse<Object>>("http://localhost:8888/vetris-security/v1/users/signon",'',{ headers,observe: "response"}); 
  }

  public mfaLoginMethod(token:any,otp:any){
    res : HttpResponse ;
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('AUTHORIZATION',token)
  .set('otp',otp);
    return this.httpClient.post<HttpResponse<Object>>("http://localhost:8888/vetris-security/v1/users/mfasignon",'',{headers,observe: "response"}); 
  }

  getData(token:any){
    console.log("jusrt missed");
    console.log(token);
    // const headers = { 'AUTHORIZATION': token.replace(/['"]+/g, '') ,'Content-Type':'application/json'.replace(/['"]+/g, '')}//,"Access-Control-Allow-Origin": "*"}
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      AUTHORIZATION: token });
    return this.http.get<any>('http://localhost:8080/usermanagement/v1/user/', { headers });   
  }

}
