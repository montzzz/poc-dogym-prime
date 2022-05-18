import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDateToInsertUpdate(date: string): string{
    const arrDate = date.split('/')

    // GAMBI PRA TRANSFORMAR A DATA RECEBIDA DO BACKEND (01/01/1999) NO FORMATO UTF -> 1999-01-01
    return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`
  }

  getDateTimeToInsertUpdate(date: string): string{
    const arrDate = date.split('/')
    const arrYear = arrDate[2].split(' ')

    // GAMBI PRA TRANSFORMAR A DATA E HORA RECEBIDA DO BACKEND (01/01/1999 01:01:02) NO FORMATO UTF -> 1999-01-01T01:01:02
    return `${arrYear[0]}-${arrDate[1]}-${arrDate[0]} ${arrYear[1]}`
  }

  getDateToList(date: string): string{
    const arrDate = date.split('/')

    // GAMBI PRA TRANSFORMAR A DATA RECEBIDA DO BACKEND (01/01/1999) NO FORMATO UTF -> 1999/01/01
    return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`
  }
}
