<template>
	<div class="container">
		<section class="section">
			<form>
				<TextField v-for="(props, key) of fields" :key="key" v-bind="props" v-model="fields[key].validatedValue" />
				<FileUpload v-model="cv" file-type="CV" />
				<div class="buttons level-right">
					<BButton :disabled="!isValid" size="is-medium" type="is-primary">
						Apply...
					</BButton>
					<BButton size="is-medium" type="is-warning">
						Cancel
					</BButton>
				</div>
			</form>
		</section>
	</div>
</template>

<script>
import FileUpload from './FileUpload';
import TextField from './TextField';

const requiredField = { value: { presence: { message: '^Required field', allowEmpty: false } } };

export default {
	components: { FileUpload, TextField },
	data: () => ({
		fields: {
			firstName: {
				validatedValue: {},
				label: '* First Name',
				placeholder: 'Alex',
				validator: requiredField
			},
			lastName: {
				validatedValue: {},
				label: '* Last Name',
				placeholder: 'Smith',
				validator: requiredField
			},
			email: {
				validatedValue: {},
				label: '* Email',
				type: 'email',
				placeholder: 'alex@example.com',
				icon: 'envelope',
				validator: {
					value: {
						presence: { message: '^Required field', allowEmpty: false },
						email: { message: '^Must be a valid email address' }
					}
				}
			},
			postCode: {
				validatedValue: {},
				label: '* Phone Number',
				placeholder: '07123456789',
				icon: 'phone',
				validator: requiredField
			},
			phoneNumber: {
				validatedValue: {},
				label: 'Post Code',
				icon: 'mail-bulk',
				validator: requiredField
			},
			role: {
				validatedValue: {},
				label: 'Role'
			},
			currentSalary: {
				validatedValue: {},
				label: 'Current Salary'
			},
			expectedSalary: {
				validatedValue: {},
				label: 'Expected Salary'
			}
		},
		cv: {}
	}),
	computed: {
		isValid() {
			return Object.values(this.fields)
				.map(field => field.validatedValue)
				.reduce((acc, { validationErrors }) => acc && !validationErrors, true);
		}
	}
};
</script>

<style>
form {
	width: 66%;
	min-width: 200px;
	max-width: 800px;
	margin: auto;
}
</style>
