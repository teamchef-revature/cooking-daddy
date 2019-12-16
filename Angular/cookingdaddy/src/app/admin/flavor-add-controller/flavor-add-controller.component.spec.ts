import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorAddControllerComponent } from './flavor-add-controller.component';

describe('FlavorAddControllerComponent', () => {
  let component: FlavorAddControllerComponent;
  let fixture: ComponentFixture<FlavorAddControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavorAddControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorAddControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
