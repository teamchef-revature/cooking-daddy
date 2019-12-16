import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAddControllerComponent } from './quality-add-controller.component';

describe('QualityAddControllerComponent', () => {
  let component: QualityAddControllerComponent;
  let fixture: ComponentFixture<QualityAddControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityAddControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAddControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
