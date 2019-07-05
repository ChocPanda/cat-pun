<template>
	<section class="section">
		<BField>
			<BUpload v-model="dropFiles" multiple drag-drop>
				<section class="section">
					<div class="content has-text-centered">
						<p>
							<BIcon icon="upload" size="is-large" />
						</p>
						<p>Drop your {{ fileType }} here or click to upload</p>
					</div>
				</section>
			</BUpload>
		</BField>

		<div class="tags">
			<span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
				{{ file.name }}
				<button @click="deleteDropFile(index)" class="delete is-small" type="button" />
			</span>
		</div>
	</section>
</template>

<script>
export default {
	props: { fileType: { type: String, default: 'file' } },
	data() {
		return {
			dropFiles: []
		};
	},
	methods: {
		deleteDropFile(index) {
			this.dropFiles.splice(index, 1);
		}
	}
};
</script>

<style scoped>
.section {
	text-align: center;
}
</style>
