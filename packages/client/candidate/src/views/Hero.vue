<template>
	<section class="hero is-primary is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">
					{{ companyName }}
				</h1>
				<h2 class="subtitle">
					Apply now
				</h2>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: { companyName: { type: String, required: true } }
};
</script>

<style></style>
