import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityControllerComponent } from './quality-controller.component';

describe('QualityControllerComponent', () => {
  let component: QualityControllerComponent;
  let fixture: ComponentFixture<QualityControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
