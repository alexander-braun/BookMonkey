import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BookMonkey';
  name = { peo: null };
  myUrl = '';
  hasError = true;
  angularVersion = 1;
  names = ['name 1', 'name 2', 'name 3', 'name x'];
  myClickhandler(): void {
    console.log('Click');
  }
}
