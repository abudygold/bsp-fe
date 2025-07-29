import { ChangeDetectionStrategy, Component, inject, model, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	imports: [MatListModule, MatIconModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
	#router = inject(Router);

	navigation = model.required<any[]>();

	ngOnInit(): void {
		this.navigation.update(menus => this.#changeActivateMenu(menus, this.#router.url));
	}

	#onExpandMenu(_menu: any): void {
		if (!_menu?.isParent) {
			_menu.isOpened = !_menu.isOpened;
			return;
		}

		this.navigation.update(menus =>
			menus.map(menu => {
				if (menu?.subMenu?.length) menu.subMenu = this.#collapseMenu(menu.subMenu);

				return { ...menu, isOpened: _menu.label === menu.label };
			}),
		);
	}

	onClickMenu(menu: any): void {
		if (!menu?.link) {
			this.#onExpandMenu(menu);
			return;
		}

		this.navigation.update(menus => this.#changeActivateMenu(menus, menu.link));
		this.#router.navigate([menu.link]);
	}

	#collapseMenu(menus: any[]): any[] {
		return menus.map(menu => {
			if (menu?.subMenu?.length) this.#collapseMenu(menu.subMenu);

			return { ...menu, isOpened: false };
		});
	}

	#changeActivateMenu(menus: any[], link: string): any[] {
		return menus.map(menu => {
			if (menu?.subMenu?.length) this.#collapseMenu(menu.subMenu);

			return { ...menu, isActive: menu.link === link };
		});
	}
}
