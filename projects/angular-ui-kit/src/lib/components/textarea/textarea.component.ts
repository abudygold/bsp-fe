import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfigFieldModel } from '../../shared/model';

@Component({
	selector: 'lib-textarea',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
	templateUrl: './textarea.component.html',
	styleUrl: './textarea.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
	onInput = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input.required<FormControl>();

	onInputChange(event: Event): void {
		const inputValue = (event.target as HTMLInputElement).value;
		let timerId: any = null;

		clearTimeout(timerId);
		timerId = setTimeout(() => this.onInput.emit(inputValue), 600);
	}
}
