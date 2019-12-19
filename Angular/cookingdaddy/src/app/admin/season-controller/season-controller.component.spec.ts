import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonControllerComponent } from './season-controller.component';

describe('SeasonControllerComponent', () => {
  let component: SeasonControllerComponent;
  let fixture: ComponentFixture<SeasonControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
