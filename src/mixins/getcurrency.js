export default {
    methods: {
        async getCurrencies() {
            const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
            const response = await fetch(url)
            try {
                const result = await response.json()
                this.$store.dispatch('runSetCurrencies', result)
                console.log('success!')
            } catch(e) {
                console.log('fail!')
                throw new Error(e)
                
            }
        }
    }
}