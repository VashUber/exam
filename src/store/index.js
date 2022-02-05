import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
	state: {
		aboutPage: '',
		mainPage: {}
	},
	mutations: {
		async setAboutPage(state) {
			const resp = await axios.get(
				'https://demo-api.vsdev.space/api/farm/about_page'
			)
			state.aboutPage = resp.data.text
		},
		async setMainPage(state) {
			const resp = await axios.get(
				'https://demo-api.vsdev.space/api/farm/home_page'
			)
			state.mainPage = resp.data
		}
	},
	actions: {
		setAboutPage(context) {
			context.commit('setAboutPage')
		},
		setMainPage(context) {
			context.commit('setMainPage')
		}
	},
	getters: {
		getAboutPageInfo(state) {
			return state.aboutPage
		},
		getMainPageInfo(state) {
			return state.mainPage
		}
	}
})
