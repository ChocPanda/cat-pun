<template>
	<div class="container">
		<section>
			<BField v-model="firstName" label="First Name">
				<BInput />
			</BField>
			<BField v-model="lastName" label="Last Name">
				<BInput />
			</BField>
			<BField v-model="email" label="Email">
				<BInput type="email" maxlength="30" />
			</BField>
		</section>
	</div>
</template>

<script>
export default {
	data: () => ({
		labelPosition: 'on-border',
		firstName: '',
		lastName: '',
		email: ''
	})
};
</script>

<style></style>
