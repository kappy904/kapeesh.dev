import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialLeftComponent } from './testimonial-left.component';

describe('TestimonialLeftComponent', () => {
  let component: TestimonialLeftComponent;
  let fixture: ComponentFixture<TestimonialLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
