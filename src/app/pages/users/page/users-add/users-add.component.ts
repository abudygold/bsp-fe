import {
	ApiService,
	ButtonComponent,
	FormlyComponent,
	FormlyModel,
} from '@devkitify/angular-ui-kit';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { API_URL } from '../../../../app.const';
import { ISubmitButton, SUBMIT_BUTTON_CONST } from '../../../../shared/const/button';
import { USERS_FORM } from '../../../../shared/const/form/user';

@Component({
	selector: 'app-users-add',
	imports: [FormsModule, ReactiveFormsModule, FormlyComponent, ButtonComponent],
	templateUrl: './users-add.component.html',
	styleUrl: './users-add.component.scss',
})
export class UsersAddComponent {
	#router = inject(Router);
	#activatedRoute = inject(ActivatedRoute);
	#apiService = inject(ApiService);

	formConfig: FormlyModel = USERS_FORM;
	submitButton: ISubmitButton = SUBMIT_BUTTON_CONST();
	form: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		username: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		street: new FormControl('', Validators.required),
		suite: new FormControl('', Validators.required),
		city: new FormControl('', Validators.required),
		zipcode: new FormControl('', Validators.required),
		lat: new FormControl('', Validators.required),
		lng: new FormControl('', Validators.required),
		phone: new FormControl('', [Validators.required, Validators.pattern(/^1-\d{3}-\d{3}-\d{4}$/)]),
		website: new FormControl('', Validators.required),
		companyName: new FormControl('', Validators.required),
		catchPhrase: new FormControl('', Validators.required),
		bs: new FormControl('', Validators.required),
	});

	onSubmit(): void {
		this.form.markAllAsTouched();

		const formData = this.form.getRawValue();
		const bodyReq = {
			id: 1,
			name: formData.name,
			username: formData.username,
			email: formData.email,
			address: {
				street: formData.street,
				suite: formData.suite,
				city: formData.city,
				zipcode: formData.zipcode,
				geo: {
					lat: formData.lat,
					lng: formData.lng,
				},
			},
			phone: formData.phone,
			website: formData.website,
			company: {
				name: formData.name,
				catchPhrase: formData.catchPhrase,
				bs: formData.bs,
			},
		};

		this.#apiService.post(API_URL + '/users', bodyReq).subscribe({
			next: () => this.navigateToList(),
		});
	}

	navigateToList(): void {
		this.#router.navigate(['./'], {
			relativeTo: this.#activatedRoute,
		});
	}
}
