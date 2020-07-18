import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserCollectionComponent } from './add-user-collection.component';

describe('AddUserCollectionComponent', () => {
  let component: AddUserCollectionComponent;
  let fixture: ComponentFixture<AddUserCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
