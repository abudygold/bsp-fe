import { Component, computed, inject, input, output, signal } from '@angular/core';
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

	options = input.required<ChipModel>();

	selectedTag = signal<any[]>([]);

	readonly separatorKeysCodes = [ENTER, COMMA] as const;
	readonly filteredOptions = computed(() => {
		if (this.options().chipType !== 'autocomplete') return [];

		const key = this.options().key;
		const tags = this.options().tags();
		const options = this.options().autocompleteOptions || [];

		return tags && typeof tags.at(0) === 'object'
			? options.filter(option => !tags.some(tag => tag[key] === option[key]))
			: options.filter(option => !tags.some(tag => tag === option));
	});

	drop(event: CdkDragDrop<any[]>) {
		this.options().tags.update(tags => {
			moveItemInArray(tags, event.previousIndex, event.currentIndex);
			return [...tags];
		});
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();

		if (value) {
			this.options().tags.update(tags => [
				...tags,
				this.options().key ? { [this.options().key]: value } : value,
			]);
			this.onSelection.emit(this.options().tags());
		}

		event.chipInput!.clear();
	}

	remove(tag: any): void {
		this.options().tags.update(tags => {
			const index = tags.indexOf(tag);
			if (index < 0) {
				return tags;
			}

			tags.splice(index, 1);
			this.announcer.announce(`Removed ${this.options().key ? tag[this.options().key] : tag}`);
			return [...tags];
		});
		this.onSelection.emit(this.options().tags());
	}

	edit(_tag: any, event: MatChipEditedEvent) {
		const value = event.value.trim();

		if (!value) {
			this.remove(_tag);
			return;
		}

		this.options().tags.update(tags => {
			const index = tags.indexOf(_tag);
			if (index >= 0) {
				tags[index][this.options().key] = value;
				return [...tags];
			}
			return tags;
		});
		this.onSelection.emit(this.options().tags());
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		this.options().tags.update(tags => [
			...tags,
			this.options().key
				? { [this.options().key]: event.option.viewValue }
				: event.option.viewValue,
		]);
		this.onSelection.emit(this.options().tags());
		event.option.deselect();
	}
}
