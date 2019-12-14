import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityItemControllerComponent } from './quality-item-controller.component';

describe('QualityItemControllerComponent', () => {
  let component: QualityItemControllerComponent;
  let fixture: ComponentFixture<QualityItemControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityItemControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityItemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
