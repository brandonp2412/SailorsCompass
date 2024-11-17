import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson4Component } from './lesson4.component';

describe('Lesson4Component', () => {
  let component: Lesson4Component;
  let fixture: ComponentFixture<Lesson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
