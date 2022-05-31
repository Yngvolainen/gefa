<template>
	<div class="wrapper">
		<Header />
		<RouterView />
	</div>
</template>

<script>
	import Header from '../components/Header.vue'

	export default {
		components: {
			Header
		}
	}
</script>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';

	.wrapper {
		width: 100%;
		margin: 0 auto;
		max-width: 768px;
		max-height: 1024px;
	}
</style>
