import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDataType } from './app.mydata';

@Injectable()
export class MyService {
  mydata: MyDataType[] = [
    { id: 1, value: 'value_1' },
    { id: 2, value: 'value_2' },
    { id: 3, value: 'value_3' },
  ];

  constructor() {}

  getData(): Observable<MyDataType[]> {
    let data = new Observable<MyDataType[]>((observer) => {
      setTimeout(() => {
        observer.next(this.mydata);
      }, 4000);
    });
    return data;
  }
}
