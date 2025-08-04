import { Component, inject, input, OnInit, output } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormStore } from '../../store';
import { ConfigFieldModel } from '../../shared/model';

@Component({
	selector: 'lib-datepicker',
	providers: [provideNativeDateAdapter()],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatCardModule,
	],
	templateUrl: './datepicker.component.html',
	styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent implements OnInit {
	protected formStore = inject(FormStore);

	onChange = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input<FormControl>();

	readonly range = new FormGroup({
		start: new FormControl<Date | null>(null),
		end: new FormControl<Date | null>(null),
	});

	ngOnInit(): void {
		if (this.config().datepicker?.isRangeDate) {
			this.range.patchValue({
				start: this.control()?.value?.start ? new Date(this.control()?.value.start) : null,
				end: this.control()?.value?.start ? new Date(this.control()?.value.end) : null,
			});
			this.range.get('start')?.addValidators([Validators.required]);
			this.range.get('end')?.addValidators([Validators.required]);
			this.range.get('start')?.updateValueAndValidity();
			this.range.get('end')?.updateValueAndValidity();
		}
	}

	onDateChange(event: MatDatepickerInputEvent<any, any>, isRange: boolean = false): void {
		if (isRange) {
			this.onChange.emit(this.range.getRawValue());
			this.control()?.setValue(this.range.getRawValue());
			return;
		}

		const dateValue = event.value;
		this.onChange.emit(dateValue);
	}
}
