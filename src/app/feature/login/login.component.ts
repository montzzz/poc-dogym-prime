import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { Router } from '@angular/router';

import { UserLogin } from '@shared/domain/user/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;

  userLogin: UserLogin = {
    email: '',
    senha: '',
  };

  constructor(
    private _localStorageService: LocalStorageService,
    private _httpService: HttpService,
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {
    
  }

  ngOnInit(): void {}

  login() {
    this.loading = true;

    this._httpService.post('/login', this.userLogin).subscribe(
      (response: any) => {
        this.userLogin.token = response.headers.get('Authorization') || '';
        this.userLogin.gymId = response.body.gym.id;
        this.userLogin.id = response.body.id;
        this.userLogin.senha = '';

        this._localStorageService.clear()
        // grava o usuário com o novo token no local storage
        this._localStorageService.set('dogymUser', this.userLogin);
        this._authenticationService.setAuthenticated(true)

        this.loading = false;
        this.clearUser();

        this._router.navigateByUrl('/home')
      },
      (error) => {
        console.error(error);
        this._localStorageService.clear();
        this._authenticationService.setAuthenticated(false)
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
