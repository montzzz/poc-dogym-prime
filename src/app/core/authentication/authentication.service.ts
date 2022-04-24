import { Injectable } from '@angular/core';

import { LocalStorageService  } from '@core/local-storage/local-storage.service';
import { UserLogin } from '@domain/user/user-login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authenticated = false;

  constructor(private _localStorageService: LocalStorageService) {}

  public isUserAuthenticated(): boolean {
    return this.authenticated;
  }

  public setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }

  public getLoggedUser(): UserLogin{
    return this._localStorageService.get('dogymUser')
  }
}
