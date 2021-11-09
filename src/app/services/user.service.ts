import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient: HttpClient;

  constructor(private http:HttpClient,httpBackend: HttpBackend) {
    this.httpClient= new HttpClient(httpBackend);
   }
  
  public loginMethod(user : User):Observable<any>{
    console.log(user.loginId);
    console.log(user.password);
    // this.authenticate(user.loginId,user.password)
    console.log("called authenticate");
    res : HttpResponse ;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.loginId + ':' + user.password) });
    return this.httpClient.post<HttpResponse<Object>>("http://localhost:8888/vetris-security/v1/users/signon",'',{ headers,observe: "response"}); 
  }

}
