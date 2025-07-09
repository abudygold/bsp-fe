import { Component, input, output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModel } from '../../shared/model';

@Component({
	selector: 'lib-button',
	imports: [NgTemplateOutlet, MatButtonModule, MatIconModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	config = input.required<ButtonModel>();
	onClick = output<void>();
}
