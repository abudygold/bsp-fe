import { Component, inject } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../../components/header';
import { BreadcrumbModel, BreadcrumbsComponent, isMobile } from '@abudygold/angular-ui-lib';
import { FooterComponent } from '../../components/footer';
import { SidebarComponent } from '../../components/sidebar';
import { NAVIGATIONS } from '../../../app.const';
import { filter } from 'rxjs';

@Component({
	selector: 'app-main-layout',
	imports: [
		RouterOutlet,
		MatSidenavModule,
		HeaderComponent,
		FooterComponent,
		SidebarComponent,
		BreadcrumbsComponent,
	],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
	#router = inject(Router);

	navigation: any[] = NAVIGATIONS;
	breadcrumbs: BreadcrumbModel[] = [];
	drawerMode: 'side' | 'over';
	drawerOpened: boolean;

	constructor() {
		this.drawerMode = isMobile() ? 'over' : 'side';
		this.drawerOpened = isMobile() ? false : true;

		this.#router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			const root = this.#router.routerState.root;
			this.buildBreadcrumbs(root.snapshot);
		});
	}

	buildBreadcrumbs(route: ActivatedRouteSnapshot | null): void {
		if (!route) return;

		const breadcrumbs = route.data['breadcrumb'];

		if (breadcrumbs) this.breadcrumbs = breadcrumbs;

		this.buildBreadcrumbs(route.firstChild);
	}
}
