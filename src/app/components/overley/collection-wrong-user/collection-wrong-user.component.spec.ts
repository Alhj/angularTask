import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionWrongUserComponent } from './collection-wrong-user.component';

describe('CollectionWrongUserComponent', () => {
  let component: CollectionWrongUserComponent;
  let fixture: ComponentFixture<CollectionWrongUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionWrongUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionWrongUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
