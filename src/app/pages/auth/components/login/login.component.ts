import {
	ButtonComponent,
	ButtonModel,
	CheckboxComponent,
	ConfigFieldModel,
	FormlyComponent,
	FormlyModel,
} from '@abudygold/angular-ui-lib';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import {
	LOGIN_BY_GOOGLE_BUTTON,
	LOGIN_FORM,
	LOGIN_SUBMIT_BUTTON,
	REMEMBER_ME,
} from '../../../../shared/const/form/auth';

@Component({
	selector: 'app-login',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatDividerModule,
		FormlyComponent,
		ButtonComponent,
		CheckboxComponent,
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	#router = inject(Router);
	#activatedRoute = inject(ActivatedRoute);

	formConfig = {
		formly: signal<FormlyModel>(LOGIN_FORM),
		remember: signal<ConfigFieldModel>(REMEMBER_ME),
		google: signal<ButtonModel>(LOGIN_BY_GOOGLE_BUTTON),
		login: signal<ButtonModel>(LOGIN_SUBMIT_BUTTON),
	};

	form: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		rememberMe: new FormControl(false),
	});

	navigateToAuth(page: 'forgot-password' | 'register'): void {
		this.#router.navigate([`./${page}`], {
			relativeTo: this.#activatedRoute,
		});
	}

	doLoginByGoogleAccount(): void {
		console.log('-- Login by Google Account --');
	}

	doLogin(): void {
		this.form.markAllAsTouched();

		const { email, password } = this.form.getRawValue();

		if (!this.form.valid || email !== 'admin@example.com' || password !== '12345678') return;

		this.#router.navigate(['/secure']);
	}
}
