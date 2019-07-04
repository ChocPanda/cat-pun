<template>
	<div class="container">
		<section class="section">
			<form>
				<TextField
					v-for="(props, key) of fields"
					:key="key"
					v-bind="props"
					v-model="fields[key].validatedValue" />
				<FileUpload v-model="cv" file-type="CV" />
				<div class="buttons level-right">
					<b-button size="is-medium" type="is-primary">Apply...</b-button>
					<b-button size="is-medium" type="is-warning">Cancel</b-button>
				</div>
			</form>
		</section>
	</div>
</template>

<script>
import FileUpload from './FileUpload';
import TextField from './TextField';

export default {
	components: { FileUpload, TextField },
	data: () => ({
		fields: {
			firstName: {
				validatedValue: {},
				label: 'First Name',
				placeholder: 'Alex'
			},
			lastName: {
				validatedValue: {},
				label: 'Last Name',
				placeholder: 'Smith'
			},
			email: {
				validatedValue: {},
				label: 'Email',
				type: 'email',
				placeholder: 'alex@example.com',
				icon: 'envelope'
			},
			postCode: {
				validatedValue: {},
				label: 'Phone Number',
				placeholder: '07123456789',
				icon: 'phone'
			},
			phoneNumber: {
				validatedValue: {},
				label: 'Post Code',
				icon: 'mail-bulk'
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
