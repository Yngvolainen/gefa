import Home from './views/Home.vue';
import ProjectPage from './views/ProjectPage.vue';

export default [
	{ 
		name: 'projectPage', 
		path: '/:projectSlug', // når vi navigerer til /mike, fra ProjectPage.vue vil $route.params.projectSlug være "mike"
		component: ProjectPage 
	},
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	},
];
