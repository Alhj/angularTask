import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateSureComponent } from './delate-sure.component';

describe('DelateSureComponent', () => {
  let component: DelateSureComponent;
  let fixture: ComponentFixture<DelateSureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateSureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
