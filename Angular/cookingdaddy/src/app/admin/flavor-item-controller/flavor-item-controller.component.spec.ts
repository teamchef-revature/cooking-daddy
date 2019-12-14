import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorItemControllerComponent } from './flavor-item-controller.component';

describe('FlavorItemControllerComponent', () => {
  let component: FlavorItemControllerComponent;
  let fixture: ComponentFixture<FlavorItemControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavorItemControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorItemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
