import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // parseInt(string: string, radix?: number): number;
    // const n = parseInt((1.2).toString(), 10);
    const id = parseInt(this.route.snapshot.paramMap.get('id').toString(), 10);
    this.departmentId = id;
  }

}
