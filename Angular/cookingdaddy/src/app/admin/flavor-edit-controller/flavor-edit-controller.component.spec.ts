import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorEditControllerComponent } from './flavor-edit-controller.component';

describe('FlavorEditControllerComponent', () => {
  let component: FlavorEditControllerComponent;
  let fixture: ComponentFixture<FlavorEditControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavorEditControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorEditControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
