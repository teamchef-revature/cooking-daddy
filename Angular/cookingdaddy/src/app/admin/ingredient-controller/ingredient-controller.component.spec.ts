import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientControllerComponent } from './ingredient-controller.component';

describe('IngredientControllerComponent', () => {
  let component: IngredientControllerComponent;
  let fixture: ComponentFixture<IngredientControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
