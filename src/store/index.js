import Vuex from 'vuex'
import Vue from 'vue'

const createStore = () => {
	return new Vuex.Store({
		state: {
			kinks: {}
		},
		mutations: {
			updateKink (state,kink) {
				if(!kink.preference){
					kink.preference = "Y"
				}
				if(!kink.orientation){
					kink.orientation = "B"
				}
				Vue.set(state.kinks,kink.id,kink)
			}
		},
		getters: {
			getKinkById: (state) => (id) => {
				let kink = state.kinks[id]
				if(kink){
					return kink
				}else{
					return {
						id: id,
						selected: false,
						preference: '',
						orientation: '',
						comment: ''
					}
				}
			},
			getSelectedKinks: state => Object.values(state.kinks).filter(kink=>kink.selected)
		}
	})
}

export default createStore
