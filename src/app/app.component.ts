import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('', 'm@m.com', 1234567890, '', 'morning', true);
}
