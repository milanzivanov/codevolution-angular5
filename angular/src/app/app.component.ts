import { EnrollmentService } from './enrollment.service';
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
  userModel = new User('Milan', 'test@test.com', 1234567899, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;

  constructor(private _enrollmentService: EnrollmentService) {

  }

  validateTopic(value) {
    if (value === 'defoult') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('error', error)
      );
  }
}
