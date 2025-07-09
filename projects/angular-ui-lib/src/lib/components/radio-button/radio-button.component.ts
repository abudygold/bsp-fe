import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RadioModel } from '../../shared/model';
import { FormStore } from '../../store';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'lib-radio-button',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatRadioModule],
	templateUrl: './radio-button.component.html',
	styleUrl: './radio-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
	protected formStore = inject(FormStore);

	onChange = output<any>();

	inputConfig = input.required<RadioModel>();
	control = input.required<FormControl>();
}
