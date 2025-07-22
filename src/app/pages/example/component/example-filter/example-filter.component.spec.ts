import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFilterComponent } from './example-filter.component';

describe('ExampleFilterComponent', () => {
  let component: ExampleFilterComponent;
  let fixture: ComponentFixture<ExampleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
