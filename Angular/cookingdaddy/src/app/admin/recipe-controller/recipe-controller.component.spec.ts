import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeControllerComponent } from './recipe-controller.component';

describe('RecipeControllerComponent', () => {
  let component: RecipeControllerComponent;
  let fixture: ComponentFixture<RecipeControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
