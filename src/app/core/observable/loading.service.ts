import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  observable: Subject<any> = new Subject()

  constructor() { }

  setObservable(newValue: boolean){
    this.observable.next(newValue)
  }

  getObservable(): Observable<boolean> {
    return this.observable.asObservable()
  }
}
