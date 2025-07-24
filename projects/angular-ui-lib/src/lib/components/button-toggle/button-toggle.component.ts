import { Component, inject, input, output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonToggleModel } from '../../shared/model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormStore } from '../../store';
import { MatError } from '@angular/material/select';

@Component({
	selector: 'lib-button-toggle',
	imports: [FormsModule, ReactiveFormsModule, MatError, MatSlideToggleModule],
	templateUrl: './button-toggle.component.html',
	styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
	protected formStore = inject(FormStore);

	onChange = output<any>();

	config = input.required<ButtonToggleModel>();
	control = input.required<FormControl>();
}
