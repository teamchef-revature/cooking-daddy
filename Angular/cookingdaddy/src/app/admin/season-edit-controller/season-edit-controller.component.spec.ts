import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonEditControllerComponent } from './season-edit-controller.component';

describe('SeasonEditControllerComponent', () => {
  let component: SeasonEditControllerComponent;
  let fixture: ComponentFixture<SeasonEditControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonEditControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonEditControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
