import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/modele",
			name: "modele",
			component: () => import("./components/SaisieModele.vue")
		},
		{
			path: "/mesure",
			name: "mesure",
			component: () => import("./components/Mesure.vue")
		}
	],
	mode: "history"
})
