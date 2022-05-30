<template>
    <div class="multiple">
        <h3>list all participants</h3>
        
        <div class="multiple__payers" v-for="(participant, index) in participants">
            <label :for="participant[index]">participant {{index + 1}}</label>
            <br>
            <input class="multiple__inputs" type="text" v-model="participant.name" onclick="this.select()">
            <br>
            <label>amount paid</label>
            <br>
            <input class="multiple__inputs" type="number" v-model="participant.amount" placeholder="amount paid" onclick="this.select()"> 
            <br>
            <button @click="removeParticipant(index)">remove this participant</button>
            <br>
            
        </div>
        <!-- <div> -->
            <button @click="addParticipant">add participant</button>
        <!-- </div> -->
        <br>
        <br>
        <router-link class="multiple__link" :to="{name: 'multipleresults'}" :participants="participants">
        SHOW ME THE MONEY
        </router-link>

    </div>
</template>

<script>
import MultipleResults from './MultipleResults.vue'

export default {

    components: {
        MultipleResults
    },
    data() {
        return {
            participants: this.$store.state.participants
            // [
            // {
            //     name: 'Tom',
            //     amount: 0
            // },
            // {
            //     name: 'Dick',
            //     amount: 0
            // }
            // ]
        }
    },
    methods: {
        addParticipant() {
            this.participants.push(new Object({name: 'Anon', amount: 0}))
        },
        removeParticipant(index) {
            this.participants.splice(index, 1)
        }
    },
    // beforeUnmount() {
    //     this.$store.state.participants = this.participants
    //     console.log('unmounting multi')
    // }
}
</script>

<style>
    .multiple {
        text-align: center;
    }

    .multiple h3 , p{
        margin-bottom: 1rem;
    }

    .multiple__payers {
        margin-bottom: 15px;
    }

    .multiple__inputs {
        padding: 0.5rem;
        border-radius: 5px;
    }

    .multiple__link {
        margin-top: 1rem;
        color: var(--foreground);
        background: var(--highlight);
        text-decoration: none;
        padding: var(--button-padding-big);
        border-radius: 25px;
    }
</style>