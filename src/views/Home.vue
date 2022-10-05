<template>
    <div class="home">
        <choosepayers :title="titles.single" :link="links.single"></choosepayers>
        
        <choosepayers :title="titles.multiple" :link="links.multiple"></choosepayers>
    </div>
</template>

<script>
import choosepayers from '../components/Choosepayers.vue'
import getCurrencyMixin from '../mixins/getcurrency.js'

export default {
    components: {
        choosepayers,
    },
    mixins: [getCurrencyMixin],
    data() {
        return {
            titles: {
                single: 'SINGLE PAYER',
                multiple: 'MULTIPLE PAYERS'
            },
            links: {
                single: 'single',
                multiple: 'multiple'
            },
        }
    },
    created() {
        this.getCurrencies()
    }
}
</script>

<style>
    .home {
        height: 90%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly; 
        align-items: center;
    }

</style>