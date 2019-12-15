import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifridgeComponent } from './minifridgecomponent';

describe('MinifridgeComponent', () => {
  let component: MinifridgeComponent;
  let fixture: ComponentFixture<MinifridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
