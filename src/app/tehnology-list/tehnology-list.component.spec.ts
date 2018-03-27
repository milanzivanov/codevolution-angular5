import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TehnologyListComponent } from './tehnology-list.component';

describe('TehnologyListComponent', () => {
  let component: TehnologyListComponent;
  let fixture: ComponentFixture<TehnologyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TehnologyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TehnologyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
