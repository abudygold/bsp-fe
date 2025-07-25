import { NgTemplateOutlet } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	inject,
	input,
	output,
	TemplateRef,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextboxModel } from '../../shared/model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormStore } from '../../store';
import { EmptySpaceDirective, OnlyNumberDirective } from '../../shared/directives';

@Component({
	selector: 'lib-textbox',
	imports: [
		NgTemplateOutlet,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		EmptySpaceDirective,
		OnlyNumberDirective,
	],
	templateUrl: './textbox.component.html',
	styleUrl: './textbox.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextboxComponent {
	protected formStore = inject(FormStore);

	onInput = output<any>();

	config = input.required<TextboxModel>();
	control = input.required<FormControl>();

	@ContentChild('matPrefixRef')
	public matPrefixRef!: TemplateRef<any> | null;

	@ContentChild('matSuffixRef')
	public matSuffixRef!: TemplateRef<any> | null;

	@ContentChild('matTextPrefixRef')
	public matTextPrefixRef!: TemplateRef<any> | null;

	@ContentChild('matTextSuffixRef')
	public matTextSuffixRef!: TemplateRef<any> | null;

	onInputChange(event: Event): void {
		const inputValue = (event.target as HTMLInputElement).value;
		let timerId: any = null;

		clearTimeout(timerId);
		timerId = setTimeout(() => this.onInput.emit(inputValue), 600);
	}
}
