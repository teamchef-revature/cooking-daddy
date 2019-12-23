import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrowComponent } from './postrow.component';

describe('PostrowComponent', () => {
  let component: PostrowComponent;
  let fixture: ComponentFixture<PostrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
