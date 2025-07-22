import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAddComponent } from './example-add.component';

describe('ExampleAddComponent', () => {
  let component: ExampleAddComponent;
  let fixture: ComponentFixture<ExampleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
