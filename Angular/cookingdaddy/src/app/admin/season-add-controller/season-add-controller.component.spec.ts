import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAddControllerComponent } from './season-add-controller.component';

describe('SeasonAddControllerComponent', () => {
  let component: SeasonAddControllerComponent;
  let fixture: ComponentFixture<SeasonAddControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonAddControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonAddControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
