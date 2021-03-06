import Home from './views/Home.vue';
import Single from './views/Single.vue';
import Multiple from './views/Multiple.vue';
import MultipleResults from './views/MultipleResults.vue';
import SingleResults from './views/SingleResults.vue';
import About from './components/About.vue';

export default [
	{
		name: 'multiple',
		path: '/multiple',
		component: Multiple
	},
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
		name: 'singleresults',
		path: '/singleresults',
		component: SingleResults
	},
	{
		name: 'multipleresults',
		path: '/multipleresults',
		component: MultipleResults
	},
	{
		name: 'about',
		path: '/about',
		component: About
	}
];
