import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorControllerComponent } from './flavor-controller.component';

describe('FlavorControllerComponent', () => {
  let component: FlavorControllerComponent;
  let fixture: ComponentFixture<FlavorControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavorControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
