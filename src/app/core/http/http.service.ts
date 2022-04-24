import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { UserLogin } from '@shared/domain/user/user-login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string;
  aUser: UserLogin;

  constructor(public http: HttpClient, private localStorageService: LocalStorageService) {
    this.url = environment.apiPath;
  }

  /* GENERATE THE HEADER HTTP REQUEST */ 
  getHttpHeaders(): HttpHeaders{
    this.aUser = this.localStorageService.get('dogymUser')
    return new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.aUser.token ? this.aUser.token! : '',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  post(apiPath: string, body: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${this.url + apiPath}`, body, {headers: this.getHttpHeaders(), observe: 'response'})
  }

  get(apiPath: string): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${this.url + apiPath}`, {headers: this.getHttpHeaders(), observe: 'response'})
  }

  put(apiPath: string, body: any): Observable<any> {
    return this.http.put<HttpResponse<any>>(`${this.url + apiPath}`, body, {headers: this.getHttpHeaders(), observe: 'response'})
  }
}
