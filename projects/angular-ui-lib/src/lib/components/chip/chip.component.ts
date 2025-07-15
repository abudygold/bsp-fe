import { Component, inject, input, signal } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ChipModel } from '../../shared/model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'lib-chip',
	imports: [CdkDropList, CdkDrag, MatFormFieldModule, MatChipsModule, MatIconModule],
	templateUrl: './chip.component.html',
	styleUrl: './chip.component.scss',
})
export class ChipComponent {
	readonly announcer = inject(LiveAnnouncer);

	options = input.required<ChipModel>();

	drop(event: CdkDragDrop<any[]>) {
		this.options().options.filter(item => {
			moveItemInArray(item, event.previousIndex, event.currentIndex);
			return [...item];
		});
	}

	readonly separatorKeysCodes = [ENTER, COMMA] as const;

	/* input */
	readonly fruits = signal<any[]>([{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }]);

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();

		// if (value) this.fruits.update(fruits => [...fruits, { name: value }]);
		if (value)
			this.options().options = [...this.options().options, { [this.options().keyValue]: value }];

		event.chipInput!.clear();
	}

	remove(fruit: any): void {
		this.fruits.update(fruits => {
			const index = fruits.indexOf(fruit);
			if (index < 0) {
				return fruits;
			}

			fruits.splice(index, 1);
			this.announcer.announce(`Removed ${fruit.name}`);
			return [...fruits];
		});
	}

	edit(fruit: any, event: MatChipEditedEvent) {
		const value = event.value.trim();

		// Remove fruit if it no longer has a name
		if (!value) {
			this.remove(fruit);
			return;
		}

		// Edit existing fruit
		this.fruits.update(fruits => {
			const index = fruits.indexOf(fruit);
			if (index >= 0) {
				fruits[index].name = value;
				return [...fruits];
			}
			return fruits;
		});
	}
	/* input */
}
