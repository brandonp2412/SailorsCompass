import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson10Component } from './lesson10.component';

describe('Lesson10Component', () => {
  let component: Lesson10Component;
  let fixture: ComponentFixture<Lesson10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
