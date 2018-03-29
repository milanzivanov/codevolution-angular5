import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = 'Milandarius';
  public siteUrl = window.location.href;

  public myId = 'testId';
  public isDisabled = false;

  // class binding
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return `Hello ${this.name}`;
  }

}
