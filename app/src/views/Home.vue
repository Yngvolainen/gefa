<template>
	<div v-if="loading">...</div>
	<pre v-else>{{ JSON.stringify(result, null, 3) }}</pre>
</template>

<script>
	import sanity from '../sanity.js'
	import query from '../groq/home.groq?raw'


	export default {
		data() {
			return {
				loading: true,
				result: null
			}
		},
		
		async created() {
			// const query = groq
			const params = { type: 'project' };

			this.result = await sanity.fetch(query, params);
			this.loading = false;

			/* head tags */
			const head = {
				title: 'Frontpage',
				description: 'Frontpage description'
			}

			document.title = head.title;
			document.querySelector('meta[name="description"]').setAttribute('content', head.description)
			document.querySelector('meta[property="og:description"]').setAttribute('content', head.description)
		}
	}
</script>