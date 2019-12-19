import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorefridgeComponent } from './storefridge.component';

describe('StorefridgeComponent', () => {
  let component: StorefridgeComponent;
  let fixture: ComponentFixture<StorefridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorefridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorefridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
