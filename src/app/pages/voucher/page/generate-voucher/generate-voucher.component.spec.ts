import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateVoucherComponent } from './generate-voucher.component';

describe('GenerateVoucherComponent', () => {
  let component: GenerateVoucherComponent;
  let fixture: ComponentFixture<GenerateVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
