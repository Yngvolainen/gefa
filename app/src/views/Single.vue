<template>
    <div class="single">
        <section class="single__section">
            <label for="singlepayeramount">total amount</label>
            <br>
            <input v-model="amount" type="number" name="amount" id="singlepayeramount">
        </section>
    
        <section class="single__section">
            <label for="singlepayerparticipants">number of participants<br>(inlcuding payer)</label>
            <br>
            <input v-model="participants" type="number" name="participants" id="singlepayerparticipants" min="2" max="999">
        </section>
    
        <section class="single__section">
            <button>
                calculate ->
            </button>
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
</style>