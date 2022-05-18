import { Injectable } from '@angular/core';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { HttpService } from '@core/http/http.service';
import { Observable } from 'rxjs';
import { Notification } from '@domain/notification/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private gymId = this._localStorageService.get('dogymUser').gymId;

  constructor(
    private _localStorageService: LocalStorageService,
    private _httpService: HttpService
  ) {}

  getNotificationsManager(): Observable<any> {
    let params = {
      gymId: this.gymId,
    };

    return this._httpService.post('/notifications/managers', params);
  }

  getNotificationById(id: string): Observable<any> {
    return this._httpService.get(`/notifications/${id}`);
  }

  updateNotification(id: string, notification: Notification): Observable<any> {
    notification.gym = { id: this.gymId };
    return this._httpService.put(`/notifications/${id}`, notification);
  }
}
