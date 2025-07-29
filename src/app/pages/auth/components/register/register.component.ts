import { Component, inject, signal } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
	ButtonComponent,
	ButtonModel,
	FormlyComponent,
	FormlyModel,
} from '@abudygold/angular-ui-lib';
import { BACK_TO_LOGIN_CONST } from '../../../../shared/const/button';
import { REGISTER_FORM, REGISTER_SEND_BUTTON } from '../../../../shared/const/form/auth';

@Component({
	selector: 'app-register',
	imports: [FormsModule, ReactiveFormsModule, FormlyComponent, ButtonComponent],
	templateUrl: './register.component.html',
	styleUrl: './register.component.scss',
})
export class RegisterComponent {
	#router = inject(Router);

	formConfig = {
		formly: signal<FormlyModel>(REGISTER_FORM),
		send: signal<ButtonModel>(REGISTER_SEND_BUTTON),
		back: signal<ButtonModel>(BACK_TO_LOGIN_CONST),
	};

	form: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	navigateToLogin(): void {
		this.#router.navigate(['/']);
	}

	doRegister(): void {
		this.form.markAllAsTouched();

		if (!this.form.valid) return;
	}
}
