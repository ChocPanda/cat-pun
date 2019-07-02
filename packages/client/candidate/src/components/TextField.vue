<template>
	<BField v-model="value" v-bind="fieldProperties">
		<BInput @input="handleInput" v-bind="inputProperties" />
	</BField>
</template>

<script>
import { validate } from 'validate.js';

export default {
	props: {
		// value: { type: [Object, Number, String], default: () => '' },
		validator: { type: Object, default: () => ({ value: { allowEmpty: true } }) },
		type: { type: String, default: () => 'text' },
		placeholder: { type: String, default: () => '' },
		icon: { type: String, default: () => '' },
		label: { type: String, default: () => '' }
	},
	data: {value: ''},
	computed: {
		validatedValue: () => ({
			value: this.value,
			validationErrors: validate(this.value)
		}),
		fieldProperties: () => {
			const validationErrors = validate(this.value);
			return {
				label: this.label,
				type: validationErrors ? 'is-danger' : '',
				message: validationErrors
			};
		},
		inputProperties: () => ({
			type: this.type,
			icon: this.icon,
			placeholder: this.placeholder
		})
	},
	methods: {
		handleInput: () => {
			this.$emit('input', {
				validatedValue: this.validatedValue
			});
		}
	}
};
</script>

<style></style>
