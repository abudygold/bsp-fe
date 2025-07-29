import { Component, computed, inject, input, output } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';
import {
	MatAutocompleteModule,
	MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { ConfigFieldModel } from '../../shared/model';

@Component({
	selector: 'lib-chip',
	imports: [
		CdkDropList,
		CdkDrag,
		MatFormFieldModule,
		MatChipsModule,
		MatAutocompleteModule,
		MatIconModule,
	],
	templateUrl: './chip.component.html',
	styleUrl: './chip.component.scss',
})
export class ChipComponent {
	readonly announcer = inject(LiveAnnouncer);

	onSelection = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input.required<FormControl>();
	options = input.required<any[]>();

	readonly separatorKeysCodes = [ENTER, COMMA] as const;
	readonly filteredOptions = computed(() => {
		if (this.config().chip?.chipType !== 'autocomplete') return [];

		const key = this.config().chip?.optionLabel || '';
		const tags = this.control().value;
		const options = this.options() || [];

		return tags && typeof tags.at(0) === 'object'
			? options.filter(option => !tags.some((tag: any) => tag[key] === option[key]))
			: options.filter(option => !tags.some((tag: any) => tag === option));
	});

	drop(event: CdkDragDrop<any[]>) {
		moveItemInArray(this.options(), event.previousIndex, event.currentIndex);
		this.onSelection.emit(this.options());
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		const tags = [...(this.control()?.value || [])];

		if (value) {
			this.control().setValue([
				...tags,
				this.config().chip?.optionLabel ? { [this.config().chip?.optionLabel!]: value } : value,
			]);
			this.onSelection.emit(this.control().value);
		}

		event.chipInput!.clear();
	}

	remove(tag: any): void {
		const tags = [...(this.control()?.value || [])];
		const index = this.config().chip?.optionLabel
			? tags.findIndex(
					(t: any) => t[this.config().chip?.optionLabel!] === tag[this.config().chip?.optionLabel!],
				)
			: tags.indexOf(tag);

		if (index >= 0) {
			tags.splice(index, 1);
			this.announcer.announce(
				`Removed ${this.config().chip?.optionLabel ? tag[this.config().chip?.optionLabel!] : tag}`,
			);
		}

		this.control().setValue(tags);
		this.onSelection.emit(tags);
	}

	edit(_tag: any, event: MatChipEditedEvent) {
		const tags = [...(this.control()?.value || [])];
		const value = event.value.trim();

		if (!value) {
			this.remove(_tag);
			return;
		}

		const index = tags.findIndex((tag: any) =>
			this.config().chip?.optionLabel
				? tag[this.config().chip?.optionLabel!] === _tag[this.config().chip?.optionLabel!]
				: tag === _tag,
		);

		if (index >= 0) {
			if (this.config().chip?.optionLabel) tags[index][this.config().chip?.optionLabel!] = value;
			else tags[index] = value;
		}

		this.control().setValue(tags);
		this.onSelection.emit(tags);
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		const tags = [...(this.control()?.value || [])];
		const newTag = this.config().chip?.optionLabel
			? { [this.config().chip?.optionLabel!]: event.option.viewValue }
			: event.option.viewValue;

		if (Array.isArray(tags)) tags.push(newTag);

		this.control().setValue(tags);
		this.onSelection.emit(tags);

		event.option.deselect();
	}
}
