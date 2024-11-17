import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1Component } from './lesson1.component';

describe('Lesson1Component', () => {
  let component: Lesson1Component;
  let fixture: ComponentFixture<Lesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
