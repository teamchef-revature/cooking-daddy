import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientItemControllerComponent } from './ingredient-item-controller.component';

describe('IngredientItemControllerComponent', () => {
  let component: IngredientItemControllerComponent;
  let fixture: ComponentFixture<IngredientItemControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientItemControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientItemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
