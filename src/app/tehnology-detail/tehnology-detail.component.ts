import { Component, OnInit } from '@angular/core';
import { TehnologiesService } from '../tehnologies.service';

@Component({
  selector: 'app-tehnology-detail',
  templateUrl: './tehnology-detail.component.html',
  styleUrls: ['./tehnology-detail.component.scss']
})
export class TehnologyDetailComponent implements OnInit {

  public tehnologies = [];

  constructor(private _tehnologyService: TehnologiesService) { }

  ngOnInit() {
    this.tehnologies = this._tehnologyService.getTehnologies();
  }

}
