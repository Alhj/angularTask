import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksHomePageComponent } from './tasks-home-page.component';

describe('TasksHomePageComponent', () => {
  let component: TasksHomePageComponent;
  let fixture: ComponentFixture<TasksHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
