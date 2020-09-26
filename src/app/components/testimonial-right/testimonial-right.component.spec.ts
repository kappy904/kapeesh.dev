import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialRightComponent } from './testimonial-right.component';

describe('TestimonialRightComponent', () => {
  let component: TestimonialRightComponent;
  let fixture: ComponentFixture<TestimonialRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
