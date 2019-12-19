import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorebasketComponent } from './storebasket.component';

describe('StorebasketComponent', () => {
  let component: StorebasketComponent;
  let fixture: ComponentFixture<StorebasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorebasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorebasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
