import { Injectable } from '@angular/core';
import { HttpService } from '@core/http/http.service';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { User } from '@domain/user/user.model';
import { Profile } from '@shared/enum/profile';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private gymId = this._localStorageService.get('dogymUser').gymId;
  private id = this._localStorageService.get('dogymUser').id;

  constructor(
    private _localStorageService: LocalStorageService,
    private _httpService: HttpService
  ) {}

  getUsersPaginated(): Observable<any> {
    let param = {
      gymId: this.gymId,
      perfis: [
        Profile.User,
        Profile.Master
      ]
    };

    return this._httpService.post('/users/paginated', param);
  }

  getUserById(id: string): Observable<any> {
    return this._httpService.get(`/users/${id}`);
  }

  updateUser(id: string, user: User): Observable<any> {
    return this._httpService.put(`/users/${id}`, user);
  }

  createOrUpdateUser(user: User, inserting: boolean): Observable<any> {
    user.userRegistration = {
      id: this.id
    }
    user.gym = {
      id: this.gymId
    }
    return inserting ? this._httpService.post('/users', user) : this._httpService.put(`/users/${user.id}`, user);
  }
}
