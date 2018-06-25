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

  userModel = new User('Milan', '', 123456789, '', 'morning', true);
}
