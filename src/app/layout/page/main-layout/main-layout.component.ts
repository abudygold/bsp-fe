import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../../components/header';
import { isMobile } from '@abudygold/angular-ui-lib';
import { FooterComponent } from '../../components/footer';
import { SidebarComponent } from '../../components/sidebar';

@Component({
	selector: 'app-main-layout',
	imports: [RouterOutlet, MatSidenavModule, HeaderComponent, FooterComponent, SidebarComponent],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
	drawerMode: 'side' | 'over';
	drawerOpened: boolean;

	navigation: any[] = [
		{
			label: 'Home',
			icon: 'home',
			isOpened: false,
			isParent: true,
			isActive: false,
			link: '/dashboard',
		},
		{
			label: 'Component',
			icon: 'home',
			isOpened: false,
			isParent: true,
			isActive: false,
			subMenu: [
				{
					label: 'List',
					icon: 'home',
					link: '/secure/example',
					isActive: false,
					paddingLeft: '2rem',
				},
				{
					label: 'Add',
					icon: 'home',
					link: '/secure/example/add',
					isActive: false,
					paddingLeft: '2rem',
				},
				{
					label: 'Expander',
					icon: 'home',
					link: '/secure/example/edit/1',
					isActive: false,
					paddingLeft: '2rem',
				},
			],
		},
		{
			label: 'Symbols',
			icon: 'home',
			isOpened: false,
			isParent: true,
			isActive: false,
			subMenu: [
				{
					label: 'Accordion',
					icon: 'home',
					link: '/aaa',
					paddingLeft: '2rem',
					isActive: false,
				},
				{
					label: 'Button',
					icon: 'home',
					link: '/bbb',
					paddingLeft: '2rem',
					isActive: false,
				},
				{
					label: 'Expander',
					icon: 'home',
					link: '/ccc',
					paddingLeft: '2rem',
					isActive: false,
				},
				{
					label: 'Component',
					icon: 'home',
					isOpened: false,
					isActive: false,
					paddingLeft: '2rem',
					subMenu: [
						{
							label: 'Accordion',
							icon: 'home',
							link: '/ddd',
							paddingLeft: '4rem',
							isActive: false,
						},
						{
							label: 'Button',
							icon: 'home',
							link: '/eee',
							paddingLeft: '4rem',
							isActive: false,
						},
						{
							label: 'Expander',
							icon: 'home',
							link: '/fff',
							paddingLeft: '4rem',
							isActive: false,
						},
						{
							label: 'Component',
							icon: 'home',
							isOpened: false,
							isActive: false,
							paddingLeft: '4rem',
							subMenu: [
								{
									label: 'Accordion',
									icon: 'home',
									link: '/ggg',
									paddingLeft: '6rem',
									isActive: false,
								},
								{
									label: 'Button',
									icon: 'home',
									link: '/hhh',
									paddingLeft: '6rem',
									isActive: false,
								},
								{
									label: 'Expander',
									icon: 'home',
									link: '/iii',
									paddingLeft: '6rem',
									isActive: false,
								},
							],
						},
					],
				},
			],
		},
	];

	constructor() {
		this.drawerMode = isMobile() ? 'over' : 'side';
		this.drawerOpened = isMobile() ? false : true;
	}
}
