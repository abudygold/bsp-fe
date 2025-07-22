import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AutocompleteModel } from '../../shared/model';
import { FormStore } from '../../store';

@Component({
	selector: 'lib-autocomplete',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatAutocompleteModule,
	],
	templateUrl: './autocomplete.component.html',
	styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent implements OnInit {
	protected formStore = inject(FormStore);

	onChange = output<any>();

	options = input.required<AutocompleteModel>();
	control = input.required<FormControl>();

	filteredOptions: any[] = [];

	ngOnInit(): void {
		this.filteredOptions = this.options().options || [];
	}

	displayFn(option: any): string {
		return option && option[this.options().keyLabel] ? option[this.options().keyLabel] : '';
	}

	onFilter(event: Event): void {
		const inputValue = (event.target as HTMLInputElement).value;

		if (!inputValue) {
			this.filteredOptions = this.options().options;
			return;
		}

		this.filteredOptions = this.options().options.filter(option =>
			typeof option === 'object'
				? option[this.options().keyLabel]?.toLowerCase().includes(inputValue)
				: option?.toLowerCase().includes(inputValue),
		);
	}
}
