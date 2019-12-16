import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditControllerComponent } from './category-edit-controller.component';

describe('CategoryEditControllerComponent', () => {
  let component: CategoryEditControllerComponent;
  let fixture: ComponentFixture<CategoryEditControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
