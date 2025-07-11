import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormStore } from '../../store';
import { DatepickerModel } from '../../shared/model';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
	selector: 'lib-datepicker',
	providers: [provideNativeDateAdapter()],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
	],
	templateUrl: './datepicker.component.html',
	styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
	protected formStore = inject(FormStore);

	onChange = output<any>();

	options = input.required<DatepickerModel>();
	control = input<FormControl>();

	readonly range = new FormGroup({
		start: new FormControl<Date | null>(null),
		end: new FormControl<Date | null>(null),
	});

	onDateChange(event: MatDatepickerInputEvent<any, any>): void {
		const dateValue = event.value;
		this.onChange.emit(dateValue);
	}
}
