<template>
	<ul>
		<li>
			<router-link to="/">til /</router-link>
		</li>

		<li>
			<router-link to="/mike">til /mike</router-link>
		</li>
	</ul>
	<RouterView />
</template>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
