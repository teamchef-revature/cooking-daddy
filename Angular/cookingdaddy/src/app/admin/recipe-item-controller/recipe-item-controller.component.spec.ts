import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemControllerComponent } from './recipe-item-controller.component';

describe('RecipeItemControllerComponent', () => {
  let component: RecipeItemControllerComponent;
  let fixture: ComponentFixture<RecipeItemControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
