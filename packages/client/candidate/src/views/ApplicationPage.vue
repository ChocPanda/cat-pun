<template>
	<main>
		<Hero v-bind:companyName="companyName" />
		<ApplicationForm />
	</main>
</template>

<script>
import ApplicationForm from '../components/ApplicationForm';
import Hero from './Hero';

export default {
	components: { Hero, ApplicationForm },
	data: () => ({
		companyName: 'Example Company'
	})
};
</script>

<style></style>
