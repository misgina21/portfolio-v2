import { createRouter, createWebHashHistory } from "vue-router";

import WebsiteLayout from "../layouts/WebsiteLayout.vue";
import HomeView from "../views/HomeView.vue";

// Define scroll behavior to scroll to top on route change
const scrollBehavior = (to, from, savedPosition) => {
	// If the route has a hash, scroll to the hash
	if (to.hash) {
		return { selector: to.hash };
	} else {
		// Otherwise, scroll to top
		return { top: 0 };
	}
};

const router = createRouter({
	history: createWebHashHistory(),
	// history: createWebHistory(import.meta.env.BASE_URL),
	base: import.meta.env.BASE_URL,

	routes: [
		// {
		// 	path: "/",
		// 	redirect: "/website/home"
		// },
		{
			path: "/",
			component: WebsiteLayout,
			children: [
				{
					path: "/",
					name: "Home",
					component: HomeView,
					meta: { title: "Home" },
				},
			],
		}
	],
	scrollBehavior, // Use the defined scroll behavior
});

// router.afterEach((to) => {
// 	document.title = `${to.meta.title} | Portfolio`;
// });



export default router;
