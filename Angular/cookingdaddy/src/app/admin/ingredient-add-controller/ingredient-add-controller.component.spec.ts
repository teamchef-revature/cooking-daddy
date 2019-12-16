import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientAddControllerComponent } from './ingredient-add-controller.component';

describe('IngredientAddControllerComponent', () => {
  let component: IngredientAddControllerComponent;
  let fixture: ComponentFixture<IngredientAddControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientAddControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientAddControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
