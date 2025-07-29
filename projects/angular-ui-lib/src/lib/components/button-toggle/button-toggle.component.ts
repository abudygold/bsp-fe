import { Component, input, output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfigFieldModel } from '../../shared/model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'lib-button-toggle',
	imports: [FormsModule, ReactiveFormsModule, MatSlideToggleModule],
	templateUrl: './button-toggle.component.html',
	styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
	onChange = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input.required<FormControl>();
}
