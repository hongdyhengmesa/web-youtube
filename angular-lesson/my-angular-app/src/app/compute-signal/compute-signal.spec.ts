import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeSignal } from './compute-signal';

describe('ComputeSignal', () => {
  let component: ComputeSignal;
  let fixture: ComponentFixture<ComputeSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputeSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(ComputeSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
