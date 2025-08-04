import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ConfigFieldModel } from '../../shared/model';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'lib-radio-button',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatRadioModule],
	templateUrl: './radio-button.component.html',
	styleUrl: './radio-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
	onChange = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input.required<FormControl>();
	options = input.required<any[]>();
}
