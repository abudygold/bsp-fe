import {
	ButtonComponent,
	ButtonModel,
	FormlyComponent,
	FormlyModel,
} from '@devkitify/angular-ui-kit';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import {
	FORGOT_PASSWORD_FORM,
	FORGOT_PASSWORD_SEND_BUTTON,
} from '../../../../shared/const/form/auth';
import { BACK_TO_LOGIN_CONST } from '../../../../shared/const/button';

@Component({
	selector: 'app-forgot',
	imports: [FormsModule, ReactiveFormsModule, FormlyComponent, ButtonComponent],
	templateUrl: './forgot.component.html',
	styleUrl: './forgot.component.scss',
})
export class ForgotComponent {
	#router = inject(Router);

	formConfig = {
		formly: signal<FormlyModel>(FORGOT_PASSWORD_FORM),
		send: signal<ButtonModel>(FORGOT_PASSWORD_SEND_BUTTON),
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
