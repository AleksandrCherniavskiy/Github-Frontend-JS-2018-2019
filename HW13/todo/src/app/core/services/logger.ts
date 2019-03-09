import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {

  constructor() { }

  log(text: string) {
    console.log(text);
  }
}
