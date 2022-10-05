<template>
    <div class="setup">
        Choose your currency
        <div class="setup__select">
            <select name="output currency" id="" v-model="chosenCurrency">
                <option v-for="(name, short) in availableCurrencies" :value="short" :key="short">
                    {{ name }}
                </option>
            </select>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            availableCurrencies: null,
            chosenCurrency: ''
        }
    },
    mounted() {
        this.setCurrencies()
    },
    beforeUnmount() {
        this.$store.dispatch('runSetDenomination', this.chosenCurrency)
        // console.log(this.$store.state.denomination)
    },  
    methods: {
        setCurrencies() {
            this.availableCurrencies = this.$store.getters.getCurrencies
            // console.log(this.availableCurrencies)
        }
    }
 }   
</script>
<style>
    .setup {
        text-align: center;
    }
    .setup__select {
        margin: 2rem 0;
    }
</style>