import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageServiceDogym } from '@core/message/message.service';
import { LoadingService } from '@core/observable/loading.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private _messageService: MessageServiceDogym,
    private _loadingService: LoadingService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Erro: ${error.error.message}`;
        } else {
          console.log('This is server side error');

          // caso seja um erro conhecido da api, retorna neste formato
          const errMessage = error.error.message
            ? error.error.message
            : error.message;

          errorMsg = `${errMessage}`;
        }
        console.log(errorMsg);

        this._messageService.addMessage('error', 'Erro', errorMsg);

        this._loadingService.setObservable(false);
        return throwError(errorMsg);
      })
    );
  }
}
