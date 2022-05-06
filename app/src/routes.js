import Home from './views/Home.vue';
import Single from './views/Single.vue';
import Multiple from './views/Multiple.vue';
// import ProjectPage from './views/ProjectPage.vue';

export default [
	// { 
	// 	name: 'projectPage', 
	// 	path: '/:projectSlug', // når vi navigerer til /mike, fra ProjectPage.vue vil $route.params.projectSlug være "mike"
	// 	component: ProjectPage 
	// },
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	},
	{
		name: 'single',
		path: '/single',
		component: Single
	},
	{
		name: 'multiple',
		path: '/multiple',
		component: Multiple
	}
];
