<template>
	<div class="container">
		<section class="section">
			<form>
				<TextField
					v-for="(props, key) in fields"
					:key="key"
					v-bind="props"
					v-model="fields[key].value"
				/>
				<FileUpload v-model="cv" />
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
				value: '',
				label: 'First Name',
				placeholder: 'Alex'
			},
			lastName: {
				value: '',
				label: 'Last Name',
				placeholder: 'Smith'
			},
			email: {
				value: '',
				label: 'Email',
				type: 'email',
				placeholder: 'alex@example.com',
				icon: 'envelope'
			},
			postCode: {
				value: '',
				label: 'Phone Number',
				placeholder: '07123456789',
				icon: 'phone'
			},
			phoneNumber: {
				value: '',
				label: 'Post Code',
				icon: 'mail-bulk'
			},
			role: {
				value: '',
				label: 'Role'
			},
			currentSalary: {
				value: '',
				label: 'Current Salary'
			},
			expectedSalary: {
				value: '',
				label: 'Expected Salary'
			},
			cv: {
				value: {},
				fileType: 'cv'
			}
		}
	}),
	// computed: {
	// 	fieldsArr: Object.entries(this.fields).reduce((acc, [fieldKey, fieldProps]) => [
	// 		...arr,
	// 		{ ...fieldProps, key: fieldKey }
	// 	], [])
	// }
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
