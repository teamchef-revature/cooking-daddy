import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferrowComponent } from './offerrow.component';

describe('OfferrowComponent', () => {
  let component: OfferrowComponent;
  let fixture: ComponentFixture<OfferrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
