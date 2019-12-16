import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientEditControllerComponent } from './ingredient-edit-controller.component';

describe('IngredientEditControllerComponent', () => {
  let component: IngredientEditControllerComponent;
  let fixture: ComponentFixture<IngredientEditControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientEditControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientEditControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
