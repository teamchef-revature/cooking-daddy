import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonItemControllerComponent } from './season-item-controller.component';

describe('SeasonItemControllerComponent', () => {
  let component: SeasonItemControllerComponent;
  let fixture: ComponentFixture<SeasonItemControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonItemControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonItemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
