import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormStore } from '../../store';
import { CheckboxModel } from '../../shared/model';

@Component({
	selector: 'lib-checkbox',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule],
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
	protected formStore = inject(FormStore);

	onChange = output<any>();

	inputConfig = input.required<CheckboxModel>();
	control = input.required<FormControl>();

	get partiallyComplete(): boolean {
		const options = this.inputConfig().options;

		if (!options[this.inputConfig().childKey]) return false;

		return (
			options[this.inputConfig().childKey].some((t: any) => t.completed) &&
			!options[this.inputConfig().childKey].every((t: any) => t.completed)
		);
	}

	onUpdate(completed: boolean, index?: number): void {
		if (index === undefined) {
			this.inputConfig().options.completed = completed;
			this.inputConfig().options[this.inputConfig().childKey]?.forEach(
				(t: any) => (t.completed = completed),
			);
			this.control().setValue(
				this.inputConfig().options[this.inputConfig().childKey].filter((t: any) => t.completed),
			);
			this.onChange.emit(this.control().value);
			return;
		}

		this.inputConfig().options[this.inputConfig().childKey][index].completed = completed;
		this.inputConfig().options[this.inputConfig().childKey].completed =
			this.inputConfig().options[this.inputConfig().childKey]?.every((t: any) => t.completed) ??
			true;
		this.control().setValue(
			this.inputConfig().options[this.inputConfig().childKey].filter((t: any) => t.completed),
		);
		this.onChange.emit(this.control().value);
	}

	onChecked(event: MatCheckboxChange, option: any): void {
		if (event.checked) {
			this.control().setValue([...this.control().value, option]);
			this.onChange.emit(this.control().value);
			return;
		}

		const options = (this.control().value || []).filter((t: any) =>
			typeof option === 'object' && this.inputConfig().key
				? t[this.inputConfig().key] !== option[this.inputConfig().key]
				: t !== option,
		);

		this.control().setValue(options);
		this.onChange.emit(this.control().value);
	}
}
