import {
	ButtonComponent,
	ButtonModel,
	FormlyComponent,
	FormlyModel,
} from '@abudygold/angular-ui-lib';
import { Component, inject, signal } from '@angular/core';
import {
	BACK_TO_LOGIN_CONST,
	FORM_FORGOT_PASSWORD_CONST,
	SEND_FORGOT_PASSWORD_CONST,
} from '../../shared/const';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-forgot',
	imports: [FormsModule, ReactiveFormsModule, FormlyComponent, ButtonComponent],
	templateUrl: './forgot.component.html',
	styleUrl: './forgot.component.scss',
})
export class ForgotComponent {
	#router = inject(Router);

	formConfig = {
		formly: signal<FormlyModel>(FORM_FORGOT_PASSWORD_CONST),
		send: signal<ButtonModel>(SEND_FORGOT_PASSWORD_CONST),
		back: signal<ButtonModel>(BACK_TO_LOGIN_CONST),
	};

	form: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	navigateToLogin(): void {
		this.#router.navigate(['/']);
	}

	doSend(): void {
		this.form.markAllAsTouched();

		if (!this.form.valid) return;
	}
}
