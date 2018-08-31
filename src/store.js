import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		kapp: {
			m: "1",
			rp: "900",
			lp: "1",
			rs: "0.5",
			xs: "0.5"
		},

		reglages: {
			u1: 0,
			module: 500,
			phase: 0
		},

		mesures: {
			i2: 0,
			u2: 0,
			p2: 0,
			p1: 0,
			rendement: 0,
			i1: 0
		}
	},

	mutations: {
		SET_MODELE(state, payload) {
			state.kapp = payload
		},

		SET_MESURES(state, payload) {
			state.mesures = payload
		},

		SET_U1(state, payload) {
			state.reglages.u1 = payload
		},

		SET_MODULE(state, payload) {
			state.reglages.module = payload
		},

		SET_PHASE(state, payload) {
			state.reglages.phase = payload
		},

		SET_MESURES_RESET(state) {
			state.mesures.i1 = 0
			state.mesures.i2 = 0
			state.mesures.u2 = 0
			state.mesures.p1 = 0
			state.mesures.p2 = 0
			state.rendement = 0
		}
	},

	actions: {
		setMesuresReset({ commit }) {
			commit("SET_MESURES_RESET")
		},

		setModeleKapp({ commit }, payload) {
			commit("SET_MODELE", payload)
		},

		setNewU1({ commit }, payload) {
			commit("SET_U1", payload)
		},

		setNewModule({ commit }, payload) {
			commit("SET_MODULE", payload)
		},

		setNewPhase({ commit }, payload) {
			commit("SET_PHASE", payload)
		},

		process({ commit, getters }) {
			const u1 = Number(getters.getReglages.u1)
			const module = Number(getters.getReglages.module)
			const phase = Number((getters.getReglages.phase * Math.PI) / 180)

			const m = Number(getters.getModeleKapp.m)
			const rp = Number(getters.getModeleKapp.rp)
			const lp = Number(getters.getModeleKapp.lp)
			const rs = Number(getters.getModeleKapp.rs)
			const xs = Number(getters.getModeleKapp.xs)

			const reel = rs + module * Math.cos(phase)
			const img = xs + module * Math.sin(phase)

			const div = Math.sqrt(reel * reel + img * img)

			const i2 = (m * u1) / div
			const u2 = module * i2
			const p2 = u2 * i2 * Math.cos(phase)

			const pertes = rs * i2 * i2 + (u1 * u1) / rp
			const p1 = p2 + pertes

			const rendement = (100 * p2) / p1 || 0

			const q2 = u2 * i2 * Math.sin(phase)
			const q1 = q2 + (u1 * u1) / (314 * lp) + xs * i2 * i2

			const s1 = Math.sqrt(p1 * p1 + q1 * q1)

			const i1 = s1 / u1 || 0

			commit("SET_MESURES", {
				i2: Number(i2.toFixed(2)),
				u2: Number(u2.toFixed(2)),
				p2: Number(p2.toFixed(0)),
				p1: Number(p1.toFixed(0)),
				rendement: Number(rendement.toFixed(2)),
				i1: Number(i1.toFixed(2))
			})
		}
	},

	getters: {
		getModeleKapp(state) {
			return state.kapp
		},

		getReglages(state) {
			return state.reglages
		},

		getMesures(state) {
			return state.mesures
		}
	}
})
//
