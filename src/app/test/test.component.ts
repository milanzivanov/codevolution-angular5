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

  // style binding

  public markirano = 'indianred';
  public titleStyle = {
    color: 'pink',
    fontStyle: 'italic',
    fontWeight: 'bold'
  };

  // event binding

  public magic = false;
  public magic2 = '';
  public magic3 = '';

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return `Hello ${this.name}`;
  }

  // event binding
  onClick() {
    this.magic = !this.magic;
  }

  onClick2() {
    this.magic2 = 'Something!!!';
  }

  onClick3(e) {
    console.log(e);
    this.magic3 = e.type;
  }

  // template reference variables
  logMsg(value) {
    console.log(value);
  }
}
