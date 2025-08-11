import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-customer-form',
	imports: [],
	templateUrl: './customer-form.component.html',
	styleUrl: './customer-form.component.scss',
})
export class CustomerFormComponent implements OnInit {
	#matDialogData = inject(MAT_DIALOG_DATA);

	ngOnInit(): void {
		console.log(this.#matDialogData);
	}
}
