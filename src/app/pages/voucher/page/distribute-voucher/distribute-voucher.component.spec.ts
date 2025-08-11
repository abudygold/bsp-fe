import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeVoucherComponent } from './distribute-voucher.component';

describe('DistributeVoucherComponent', () => {
  let component: DistributeVoucherComponent;
  let fixture: ComponentFixture<DistributeVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributeVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributeVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
