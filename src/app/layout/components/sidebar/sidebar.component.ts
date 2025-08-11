import { ChangeDetectionStrategy, Component, inject, model, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { INavigation, NAVIGATIONS } from '../../../core/navigation';

@Component({
	selector: 'app-sidebar',
	imports: [MatListModule, MatIconModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
	#router = inject(Router);

	navigation = model<INavigation[]>(NAVIGATIONS);

	ngOnInit(): void {
		this.#collapseMenu({
			link: this.#router.url,
		} as INavigation);
	}

	onClickMenu(menu: INavigation): void {
		this.#collapseMenu(menu);

		if (!menu?.link) return;

		this.#router.navigate([menu.link]);
	}

	#collapseMenu(_menu: INavigation): void {
		return this.navigation.update(menus =>
			menus.map((menu: INavigation) => ({
				...menu,
				isOpened: _menu.label === menu.label && (_menu?.subMenu || [])?.length > 0,
				isActive: menu.link === _menu.link,
			})),
		);
	}
}
