import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerVoucherComponent } from './tracker-voucher.component';

describe('TrackerVoucherComponent', () => {
  let component: TrackerVoucherComponent;
  let fixture: ComponentFixture<TrackerVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackerVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
