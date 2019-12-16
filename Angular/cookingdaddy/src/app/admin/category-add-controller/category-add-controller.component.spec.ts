import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddControllerComponent } from './category-add-controller.component';

describe('CategoryAddControllerComponent', () => {
  let component: CategoryAddControllerComponent;
  let fixture: ComponentFixture<CategoryAddControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAddControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
