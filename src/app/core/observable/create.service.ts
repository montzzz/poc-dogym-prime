import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  observable: Subject<any> = new Subject()

  constructor() { }

  setObservable(newValue: any){
    this.observable.next(newValue)
  }

  getObservable(): Observable<any> {
    return this.observable.asObservable()
  }
}
