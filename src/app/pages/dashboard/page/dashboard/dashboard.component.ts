import { Component } from '@angular/core';
import { WidgetCardComponent } from '../../components/widget-card';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-dashboard',
	imports: [MatCardModule, WidgetCardComponent],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
