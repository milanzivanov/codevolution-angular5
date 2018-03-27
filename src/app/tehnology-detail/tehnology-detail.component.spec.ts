import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TehnologyDetailComponent } from './tehnology-detail.component';

describe('TehnologyDetailComponent', () => {
  let component: TehnologyDetailComponent;
  let fixture: ComponentFixture<TehnologyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TehnologyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TehnologyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
