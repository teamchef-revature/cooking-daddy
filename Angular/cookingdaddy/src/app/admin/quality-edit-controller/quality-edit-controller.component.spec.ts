import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityEditControllerComponent } from './quality-edit-controller.component';

describe('QualityEditControllerComponent', () => {
  let component: QualityEditControllerComponent;
  let fixture: ComponentFixture<QualityEditControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityEditControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityEditControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
