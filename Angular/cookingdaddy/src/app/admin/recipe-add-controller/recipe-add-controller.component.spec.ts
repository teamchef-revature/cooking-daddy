import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddControllerComponent } from './recipe-add-controller.component';

describe('RecipeAddControllerComponent', () => {
  let component: RecipeAddControllerComponent;
  let fixture: ComponentFixture<RecipeAddControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAddControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
