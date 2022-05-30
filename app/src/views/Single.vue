<template>
    <div class="single">
        <h2>single payer</h2>
        <section class="single__section">
            <label for="singlepayeramount">total amount</label>
            <br>
            <input v-model="amount" type="number" name="amount" id="singlepayeramount" onclick="this.select()">
        </section>
    
        <section class="single__section">
            <label for="singlepayerparticipants">number of participants<br>(inlcuding payer)</label>
            <br>
            <input v-model="participants" type="number" name="participants" id="singlepayerparticipants" min="2" max="999" onclick="this.select()">
        </section>

        <p>(maybe turn down the volume before you: )</p>
        <section class="single__section">
            <router-link class="single__link" :to="{name: 'singleresults'}">
                GET PAID
            </router-link>
        </section>
    </div>

</template>
<script>
export default {
    data() {
        return {
            amount: 0,
            participants: 0
        }
    },
    beforeUnmount() {
        this.$store.state.singleParticipant = this.participants
        this.$store.state.singleAmount = this.amount
        // console.log('unmounting singleinput')
    }
}
</script>
<style scoped>
    label {
        font-size: 1.5rem;
    }
    .single {
        height: 90%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }

    .single__section input{
        padding: 0.5rem;
        margin-top: 1rem;
        border-radius: 5px;
    }

    .single__link {
        color: var(--foreground);
        background: var(--highlight);
        text-decoration: none;
        padding: var(--button-padding-big);
        border-radius: 25px;
    }
</style>