import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponentAddedListControllerComponent } from './recipe-component-added-list-controller.component';

describe('RecipeComponentAddedListControllerComponent', () => {
  let component: RecipeComponentAddedListControllerComponent;
  let fixture: ComponentFixture<RecipeComponentAddedListControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponentAddedListControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponentAddedListControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
