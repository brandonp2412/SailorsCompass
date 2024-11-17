import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson5Component } from './lesson5.component';

describe('Lesson5Component', () => {
  let component: Lesson5Component;
  let fixture: ComponentFixture<Lesson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
