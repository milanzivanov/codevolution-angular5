import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() public parentData: string;

  @Output() public childEvent = new EventEmitter();

  msg = 'Hey Milan be consistent with Angular!!!';

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit(this.msg);
  }

}
