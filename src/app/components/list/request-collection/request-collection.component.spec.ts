import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCollectionComponent } from './request-collection.component';

describe('RequestCollectionComponent', () => {
  let component: RequestCollectionComponent;
  let fixture: ComponentFixture<RequestCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
