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
		validator: { type: Object, default: () => ({ value: {} }) },
		type: { type: String, default: () => 'text' },
		placeholder: { type: String, default: () => '' },
		icon: { type: String, default: () => '' },
		label: { type: String, default: () => '' }
	},
	computed: {
		fieldProperties() {
			const errors = this.validatedValue.validationErrors;
			return {
				label: this.label,
				type: errors ? 'is-danger' : '',
				message: errors ? errors.value[0] : ''
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
				validationErrors: validate({ value: this.validatedValue.value }, this.validator)
			});
		}
	}
};
</script>

<style></style>
