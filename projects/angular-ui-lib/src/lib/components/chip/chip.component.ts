import { Component, computed, inject, input, output } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ChipModel } from '../../shared/model';
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

	config = input.required<ChipModel>();
	control = input.required<FormControl>();
	options = input.required<any[]>();

	readonly separatorKeysCodes = [ENTER, COMMA] as const;
	readonly filteredOptions = computed(() => {
		if (this.config().chipType !== 'autocomplete') return [];

		const key = this.config().keyLabel;
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
				this.config().keyLabel ? { [this.config().keyLabel]: value } : value,
			]);
			this.onSelection.emit(this.control().value);
		}

		event.chipInput!.clear();
	}

	remove(tag: any): void {
		const tags = [...(this.control()?.value || [])];
		const index = this.config().keyLabel
			? tags.findIndex((t: any) => t[this.config().keyLabel] === tag[this.config().keyLabel])
			: tags.indexOf(tag);

		if (index >= 0) {
			tags.splice(index, 1);
			this.announcer.announce(
				`Removed ${this.config().keyLabel ? tag[this.config().keyLabel] : tag}`,
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
			this.config().keyLabel
				? tag[this.config().keyLabel] === _tag[this.config().keyLabel]
				: tag === _tag,
		);

		if (index >= 0) {
			if (this.config().keyLabel) tags[index][this.config().keyLabel] = value;
			else tags[index] = value;
		}

		this.control().setValue(tags);
		this.onSelection.emit(tags);
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		const tags = [...(this.control()?.value || [])];
		const newTag = this.config().keyLabel
			? { [this.config().keyLabel]: event.option.viewValue }
			: event.option.viewValue;

		if (Array.isArray(tags)) tags.push(newTag);

		this.control().setValue(tags);
		this.onSelection.emit(tags);

		event.option.deselect();
	}
}
