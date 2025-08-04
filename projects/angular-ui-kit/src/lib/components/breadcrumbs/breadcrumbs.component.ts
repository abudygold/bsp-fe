import { Component, input } from '@angular/core';
import { BreadcrumbModel } from '../../shared/model';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
	selector: 'lib-breadcrumbs',
	imports: [RouterLink, MatIconModule, MatDividerModule],
	templateUrl: './breadcrumbs.component.html',
	styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
	breadcrumbs = input.required<BreadcrumbModel[]>();
}
