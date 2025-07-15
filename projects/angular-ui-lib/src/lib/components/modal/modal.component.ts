import { Component, input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'lib-modal',
	imports: [MatDialogModule, MatIconModule],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',
})
export class ModalComponent {
	title = input.required();
}
