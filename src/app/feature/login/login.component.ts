import { LocalStorageService } from './../../core/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthenticationService } from '@core/authentication/authentication.service';

import { User } from '@domain/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // instância privada para trabalhar com o serviço (boa prática)
  private localStorageService: LocalStorageService;
  private httpService: HttpService;
  private authenticationService: AuthenticationService;

  loading: boolean = false;

  userLogin: User = {
    email: '',
    senha: '',
  };

  constructor(
    _localStorageService: LocalStorageService,
    _httpService: HttpService,
    _authenticationService: AuthenticationService
  ) {
    this.localStorageService = _localStorageService;
    this.httpService = _httpService;
    this.authenticationService = _authenticationService;
  }

  ngOnInit(): void {}

  login() {
    this.loading = true;

    this.httpService.post('/login', this.userLogin).subscribe(
      (response: any) => {
        this.userLogin.token = response.headers.get('Authorization') || '';
        this.userLogin.gymId = response.body.gym.id;
        this.userLogin.id = response.body.id;
        this.userLogin.senha = '';

        // grava o usuário com o novo token no local storage
        this.localStorageService.set('dogymUser', this.userLogin);
        this.authenticationService.setAuthenticated(true)

        this.loading = false;
        this.clearUser();
      },
      (error) => {
        console.error(error);
        this.localStorageService.clear();
        this.authenticationService.setAuthenticated(false)
        this.loading = false;
        // msg error
      }
    );
  }

  clearUser() {
    this.userLogin = {
      email: '',
      senha: '',
    };
  }
}
