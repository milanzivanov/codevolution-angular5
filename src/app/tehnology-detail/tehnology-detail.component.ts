import { Component, OnInit } from '@angular/core';
import { TehnologiesService } from '../tehnologies.service';

@Component({
  selector: 'app-tehnology-detail',
  templateUrl: './tehnology-detail.component.html',
  styleUrls: ['./tehnology-detail.component.scss']
})
export class TehnologyDetailComponent implements OnInit {

  public tehnologies = [];
  public errorMsg;

  constructor(private _tehnologyService: TehnologiesService) { }

  ngOnInit() {
    this._tehnologyService.getTehnologies()
        .subscribe(response => this.tehnologies = response,
                   error =>  this.errorMsg = error);
  }

}
