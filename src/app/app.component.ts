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
  userModel = new User('Milan', '', 123456789, 'default', 'morning', true);
  topicHasError = true;

  validateTopic(value) {
    if (value === 'defoult') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
