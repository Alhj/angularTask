import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContianerComponent } from './contianer.component';

describe('ContianerComponent', () => {
  let component: ContianerComponent;
  let fixture: ComponentFixture<ContianerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContianerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContianerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
