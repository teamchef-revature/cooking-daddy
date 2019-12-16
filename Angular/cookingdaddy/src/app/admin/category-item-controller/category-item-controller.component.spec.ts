import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemControllerComponent } from './category-item-controller.component';

describe('CategoryItemControllerComponent', () => {
  let component: CategoryItemControllerComponent;
  let fixture: ComponentFixture<CategoryItemControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
