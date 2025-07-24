import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextboxModel } from '../../shared/model';
import { FormStore } from '../../store';

@Component({
	selector: 'lib-textarea',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
	templateUrl: './textarea.component.html',
	styleUrl: './textarea.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
	protected formStore = inject(FormStore);

	onInput = output<any>();

	config = input.required<TextboxModel>();
	control = input.required<FormControl>();

	onInputChange(event: Event): void {
		const inputValue = (event.target as HTMLInputElement).value;
		let timerId: any = null;

		clearTimeout(timerId);
		timerId = setTimeout(() => this.onInput.emit(inputValue), 600);
	}
}
