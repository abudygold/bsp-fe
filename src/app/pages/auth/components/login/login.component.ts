import {
	ButtonComponent,
	ButtonModel,
	CheckboxComponent,
	CheckboxModel,
	FormlyComponent,
	FormlyModel,
} from '@abudygold/angular-ui-lib';
import { Component, inject, signal } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import {
	BUTTON_GOOGLE_LOGIN_CONST,
	FORM_LOGIN_CONST,
	REMEMBER_ME_CONST,
	SUBMIT_LOGIN_CONST,
} from '../../shared/const';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router } from '@angular/router';

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
		formly: signal<FormlyModel>(FORM_LOGIN_CONST),
		google: signal<ButtonModel>(BUTTON_GOOGLE_LOGIN_CONST),
		remember: signal<CheckboxModel>(REMEMBER_ME_CONST),
		login: signal<ButtonModel>(SUBMIT_LOGIN_CONST),
	};

	form: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
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

		if (!this.form.valid) return;

		this.#router.navigate(['/secure']);
	}
}
