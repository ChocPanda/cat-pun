<template>
	<div class="container">
		<section class="section">
			<form>
				<BField v-model="firstName" label="First Name">
					<BInput placeholder="Alex" />
				</BField>
				<BField v-model="lastName" label="Last Name">
					<BInput placeholder="Smith" />
				</BField>
				<BField v-model="email" label="Email">
					<BInput type="email" placeholder="alex@example.com" icon="envelope" />
				</BField>
				<BField v-model="phoneNumber" label="Phone Number">
					<BInput placeholder="07123456789" icon="phone" />
				</BField>
				<BField v-model="postCode" label="Post Code">
					<BInput icon="mail-bulk" />
				</BField>
				<BField v-model="role" label="Role">
					<BInput placeholder="" />
				</BField>
				<BField v-model="currentSalary" label="Current Salary">
					<BInput placeholder="" />
				</BField>
				<BField v-model="expectedSalary" label="Expected Salary">
					<BInput placeholder="" />
				</BField>
				<FileUpload v-model="cv" file-type="cv" />
			</form>
		</section>
	</div>
</template>

<script>
import FileUpload from './FileUpload';

export default {
	components: { FileUpload },
	data: () => ({
		labelPosition: 'on-border',
		firstName: '',
		lastName: '',
		email: '',
		postCode: '',
		phoneNumber: '',
		role: '',
		currentSalary: '',
		expectedSalary: '',
		cv: {}
	})
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
