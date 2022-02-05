import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
	state: {
		aboutPage: ''
	},
	mutations: {
		async setAboutPage(state) {
			const resp = await axios.get(
				'https://demo-api.vsdev.space/api/farm/about_page'
			)
			state.aboutPage = resp.data.text
		}
	},
	actions: {
		setAboutPage(context) {
			context.commit('setAboutPage')
		}
	},
	getters: {
		getAboutPageInfo(state) {
			return state.aboutPage
		}
	}
})
