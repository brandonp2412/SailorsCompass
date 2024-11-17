import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson9Component } from './lesson9.component';

describe('Lesson9Component', () => {
  let component: Lesson9Component;
  let fixture: ComponentFixture<Lesson9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
