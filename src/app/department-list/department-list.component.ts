import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Node'},
    {'id': 3, 'name': 'MongoDB'},
    {'id': 4, 'name': 'Ruby'},
    {'id': 5, 'name': 'Bootstrap'}
  ];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 10);
      this.selectedId = id;
    });
  }

  onSelected(department) {
    // link parametar array
    // this.router.navigate(['/departments', department.id]);

    // relative
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
