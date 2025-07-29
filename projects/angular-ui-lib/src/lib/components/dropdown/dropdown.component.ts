import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ConfigFieldModel } from '../../shared/model';

@Component({
	selector: 'lib-dropdown',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
	templateUrl: './dropdown.component.html',
	styleUrl: './dropdown.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
	onSelection = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input.required<FormControl>();
	options = input.required<any[]>();

	compareWith = (option1: any, option2: any): boolean => {
		return this.config().dropdown?.optionCompareWith && option1 && option2
			? option1[this.config().dropdown?.optionCompareWith!] ===
					option2[this.config().dropdown?.optionCompareWith!]
			: option1 === option2;
	};
}
