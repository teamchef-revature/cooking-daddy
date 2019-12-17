import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditControllerComponent } from './recipe-edit-controller.component';

describe('RecipeEditControllerComponent', () => {
  let component: RecipeEditControllerComponent;
  let fixture: ComponentFixture<RecipeEditControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeEditControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
