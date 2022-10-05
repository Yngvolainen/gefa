export default {
	state() {
		return {
			participants: [
				{
					name: 'Pelle',
					amount: 0
				},
				{
					name: 'Proffen',
					amount: 0
				},
				// {
				// 	name: 'Jølle',
				// 	amount: 241
				// },
			],
			singleParticipant: 0,
			singleAmount: 0,
			denomination: 'nok',
			availableCurrencies: null
		};
	},
	getters: {
		getDenomination(state) {
			return state.denomination
		},
		getCurrencies(state) {
			return state.availableCurrencies
		}
	},
	actions: {
		runSetCurrencies(store, currencies) {
			store.commit('setCurrencies', currencies)
		},
		runSetDenomination(store, denomination) {
			store.commit('setDenomination', denomination)
		}
	},
	mutations: {
		setCurrencies(state, currencies) {
			state.availableCurrencies = currencies
			console.log(state.availableCurrencies)
		},
		setDenomination(state, denomination) {
			state.denomination = denomination
		}
	}

};
