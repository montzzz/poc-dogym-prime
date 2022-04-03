import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authenticated = false;

  constructor() {}

  public isUserAuthenticated(): boolean {
    return this.authenticated;
  }

  public setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }
}
