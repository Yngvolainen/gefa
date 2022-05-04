<template>
	<div>projectSlug = {{ $route.params.projectSlug }}</div>

	<div v-if="loading">...</div>
	<pre v-else>{{ JSON.stringify(result, null, 3) }}</pre>
</template>

<script>
	import sanity from '../sanity.js'
	import query from '../groq/projectPage.groq?raw'

	export default {
		data() {
			return {
				loading: true,
				result: null
			}
		},
		
		async created() {
			// const query = groq
			const params = { 
				slug: this.$route.params.projectSlug
			};

			this.result = await sanity.fetch(query, params);
			this.loading = false;

			/* head tags */
			const head = {
				title: this.result.title,
				description: 'Project description'
			}

			document.title = head.title;
			document.querySelector('meta[name="description"]').setAttribute('content', head.description)
			document.querySelector('meta[property="og:description"]').setAttribute('content', head.description)
		}
	}
</script>