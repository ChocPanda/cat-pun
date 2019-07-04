<template>
	<BField v-bind="fieldProperties">
		<BInput @input="handleInput" v-bind="inputProperties" v-model="validatedValue.value" />
	</BField>
</template>

<script>
import { validate } from 'validate.js';

export default {
	props: {
		validatedValue: { type: [Object, Number, String], default: () => {} },
		validator: { type: Object, default: () => ({ value: { allowEmpty: true } }) },
		type: { type: String, default: () => 'text' },
		placeholder: { type: String, default: () => '' },
		icon: { type: String, default: () => '' },
		label: { type: String, default: () => '' }
	},
	computed: {
		fieldProperties() {
			const validationErrors = validate(this.value);
			return {
				label: this.label,
				type: validationErrors ? 'is-danger' : '',
				message: validationErrors
			};
		},
		inputProperties() {
			return {
				type: this.type,
				icon: this.icon,
				placeholder: this.placeholder
			};
		}
	},
	methods: {
		handleInput() {
			this.$emit('input', {
				value: this.validatedValue.value,
				validationErrors: validate(this.validatedValue.value)
			});
		}
	}
};
</script>

<style></style>
