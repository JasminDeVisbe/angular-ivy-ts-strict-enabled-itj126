import { Component, VERSION } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyDataType } from './app.mydata';
import { MyService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  myObservableArray$: Observable<MyDataType[]> = of();

  constructor(private myService: MyService) {
    this.getData();
  }

  getData() {
    if (!this.myObservableArray$) {
      this.myObservableArray$ = this.myService.getData();
    }
  }
}
