import { Component, OnInit } from '@angular/core';
import { TehnologiesService } from '../tehnologies.service';

@Component({
  selector: 'app-tehnology-list',
  templateUrl: './tehnology-list.component.html',
  styleUrls: ['./tehnology-list.component.scss']
})
export class TehnologyListComponent implements OnInit {

  public tehnologies = [];

  constructor(private _tehnologyService: TehnologiesService) { }

  ngOnInit() {
    this._tehnologyService.getTehnologies()
        .subscribe(response => this.tehnologies = response);
  }

}
