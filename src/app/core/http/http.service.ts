import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { User } from '@domain/user-login.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string;
  aUser: User;

  constructor(public http: HttpClient, private localStorageService: LocalStorageService) {
    this.url = environment.apiPath;
    this.aUser = localStorageService.get('dogymUser')
  }

  /* GENERATE THE HEADER HTTP REQUEST */ 
  getHttpHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.aUser.token ? this.aUser.token! : ''
    })
  }
  
  post(apiPath: string, body: any) {
    return this.http.post<HttpResponse<any>>(`${this.url + apiPath}`, body, {headers: this.getHttpHeaders(), observe: 'response'})
  }
}
