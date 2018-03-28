import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // parseInt(string: string, radix?: number): number;
    // const n = parseInt((1.2).toString(), 10);
    // const id = parseInt(this.route.snapshot.paramMap.get('id').toString(), 10);
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 10);
      this.departmentId = id;
    });
  }

  goPrev() {
    const prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
