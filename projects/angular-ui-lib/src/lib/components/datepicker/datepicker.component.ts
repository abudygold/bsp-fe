import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
	],
	templateUrl: './datepicker.component.html',
	styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
	protected formStore = inject(FormStore);

	onChange = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input<FormControl>();

	readonly range = new FormGroup({
		start: new FormControl<Date | null>(null),
		end: new FormControl<Date | null>(null),
	});

	onDateChange(event: MatDatepickerInputEvent<any, any>, isRange: boolean = false): void {
		if (isRange) {
			this.onChange.emit(this.range.getRawValue());
			return;
		}
		const dateValue = event.value;
		this.onChange.emit(dateValue);
	}
}
