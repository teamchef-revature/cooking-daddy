import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIngredientControllerComponent } from './edit-ingredient-controller.component';

describe('EditIngredientControllerComponent', () => {
  let component: EditIngredientControllerComponent;
  let fixture: ComponentFixture<EditIngredientControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIngredientControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIngredientControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
