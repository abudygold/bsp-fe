import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../../components/header';
import { isMobile } from '@abudygold/angular-ui-lib';
import { FooterComponent } from '../../components/footer';
import { SidebarComponent } from '../../components/sidebar';
import { NAVIGATIONS } from '../../../app.const';

@Component({
	selector: 'app-main-layout',
	imports: [RouterOutlet, MatSidenavModule, HeaderComponent, FooterComponent, SidebarComponent],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
	drawerMode: 'side' | 'over';
	drawerOpened: boolean;

	navigation: any[] = NAVIGATIONS;

	constructor() {
		this.drawerMode = isMobile() ? 'over' : 'side';
		this.drawerOpened = isMobile() ? false : true;
	}
}
