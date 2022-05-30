<template>
    <div class="singleresult">
        <div v-if="!result">
            <p>
                err...you might want to check those numbers again
            </p>
        </div>
        <div v-else>
            <div>
                <p>Seeing as you were {{participants}} people, and the bill was ${{amount}}, everybody owes you:</p>
            </div>
            <div>
                <h2>$ {{result.toFixed(2)}}</h2>
            </div>
            <div>
                <img src="/images/fireworks.gif" alt="" class="singleresult__fire">
            </div>
            <audio controls autoplay class="seingleresult__audio">
                <source src="/audio/flute.wav">
            </audio>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            participants: this.$store.state.singleParticipant,
            amount: this.$store.state.singleAmount,
            result: null
        }
    },
    mounted() {
        this.getPaid()
    },
    methods: {
        getPaid() {
            // console.log('calculating the getPaid thingy')
            let sum = this.amount/this.participants
            this.result = sum
        },
    }
}
</script>

<style>
    .singleresult {
        text-align: center;
        padding: 2rem;
        height: 90%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .singleresult__fire {
        margin: 2rem 0;
        max-width: 300px;
    }
</style>