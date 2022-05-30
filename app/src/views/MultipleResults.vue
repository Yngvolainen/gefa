<template>
    <div class="multires">
        <div v-if="results.length === 0">
            <p>
                Nobody owes anyone diddly squat, or the difference in amounts you're trying to split is too miniscule to be worthy of considering. (or it could be a bug in the code... 😬)
            </p>
        </div>
        <div v-else>
            <h3 v-for="result in results" class="multires__list">
                {{result.giver}} owes {{result.receiver}} ${{result.amount}}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            participants: this.$store.state.participants,
            Payments: null,
            results: []
        }
    },
    mounted() {

        // Create a new object from the array of objects, with a little help from
        // https://stackoverflow.com/questions/42974735/create-object-from-array

        this.Payments = this.participants.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.amount }), {})
        console.log(this.Payments)

        this.splitPayments(this.Payments)
        this.splitPayments2(this.Payments)
    },
    methods: {
        splitPayments(payments) {
            // Del objektet inn i to arrays
            const people = Object.keys(payments)
            const amountPaid = Object.values(payments)
            // console.log(amountPaid)

            // Finn totalsum, trengs for å finne snittet
            const sum = amountPaid.reduce((cur, acc) => cur + acc)
            // console.log(sum)

            // Finn snittet, kortet ned til to desimaler (kanskje unødvendig, men lange tall var bare i veien i testfasen)
            const snitt = (sum / people.length).toFixed(2)
            // console.log(snitt)


            // Sorter listen over personer etter beløpet de har betalt, fra lavest til høyest
            const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]);
            // console.log(sortedPeople)

            // Sorter verdiene, trekk ifra snitt for å finne beløpet de skylder eller skal motta. Nå har vi to arrays, der personene og beløpet de skylder/skal motta ligger i samme rekkefølge
            const sortedValuesPaid = sortedPeople.map(person => payments[person] - snitt);
            // console.log(sortedValuesPaid)
                

            // Nested for-loops ftw... Vi eliminierer de som har mottatt det de skal i ytre loop, så vi jobber "baklengs" (vel, avhengig av beløp og hva som skjer i indre loop)
            for( let j = sortedValuesPaid.length - 1 ; j > 0 ; j-- ) {

                // Disse to sammen jobber seg innover ettersom vi eliminerer de som har betalt eller mottat det de skal. Indre loop stopper når siste verdi er ubetydelig liten, men 0 gir oss trøbbel med avrundings"feil" (ihvertfall i en liten periode i testfasen)
                for( let i = 0 ; sortedValuesPaid[j] > 0.01 ; i++ ) {
                    
                    // Finn den laveste verdien av første- og sistemann som gjenstår på lista. Vi finner laveste verdi fordi ingen skal betale noen mer enn differansen vedkommende har fra snittet. Første verdi vil altid være negativ, vi gjør den positiv. Math.abs funket ikke som forventet her...
                    // 
                    let gjeld = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
                    console.log(gjeld)

                    // flytt "penger" fra den som har betalt minst til den som har betalt mest. Dette vil gjenta seg i indre loop til førstemann på listen kan elimineres
                    console.log(sortedValuesPaid)
                    sortedValuesPaid[i] += gjeld
                    sortedValuesPaid[j] -= gjeld

                    // Dersom beløpet er null er det uinteressant å dytte det inn i arrayet, ihvertfall i appens nåværende tilstand (mvp...)
                    if(gjeld > 0) {
                        console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${gjeld.toFixed(2)}`);

                        this.results.push({giver: sortedPeople[i], receiver: sortedPeople[j], amount: gjeld.toFixed(2)})

                    }

                }
                // ----- some leftover code from all the fun and not so fun experiments
                // let mindiff = snitt - sortedValuesPaid[i]
                // console.log(mindiff)
    
                // let maxdiff = sortedValuesPaid[j] - snitt
                // console.log(maxdiff)
    
                // console.log(maxdiff - mindiff)
                
                // if(mindiff > 0) {
                //     console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${mindiff}`)
                    
                //     // console.log(`${sortedPeople[i]} owes ${sortedPeople[j-1]} $${mindiff - maxdiff}`)
                //     // console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${diff1}`)

                // }
                // if(mindiff < 0) {
                //     console.log(`${sortedPeople[j]} owes ${sortedPeople[i]} $${-mindiff}`)
                // }
                // if(mindiff > maxdiff) {
                //     j--
                //     console.log(`${sortedPeople[i]} poops ${-mindiff} from ${sortedPeople[i-1]}`)
                // }
                // console.log(sortedPeople[i], diff, sortedPeople[j])

                // sortedValuesPaid[i] += diff

                // let check = sortedValuesPaid[j] -= diff 
                // console.log(check)

                // console.log(sortedValuesPaid)

                // sortedValuesPaid[j] += diff
                // console.log(sortedValuesPaid[j])

                // if (diff > 0){
                //     console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${diff}`)
                // } 
                // if (diff < 0) {
                //     console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${-diff}`)
                // }

                // console.log(diff)
                // console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${diff}`)

                // sortedValuesPaid[i] -= diff
                // sortedValuesPaid[j] += diff

                // if(sortedValuesPaid[j] > snitt){
                //     console.log('yeah')
                // }

                // if(diff > 0) {
                //     console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${diff}`)
                //     j--
                // }

                // console.log(sortedValuesPaid[i])

                // if(sortedValuesPaid[i] === sortedValuesPaid[j]){
                //     console.log('like!')
                // }

                // if(sortedValuesPaid[i] < snitt)  {
                    
                //     let nydiff = sortedValuesPaid[j] - snitt
                //     console.log(nydiff)
                //     // console.log(snitt - sortedValuesPaid[i])
                //     console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${diff}`)

                // } else {
                //     console.log('faen')
                // }
                // let debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
                // console.log(debt)

                // sortedValuesPaid[i] += debt;
                // sortedValuesPaid[j] -= debt;

                // console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${debt.toFixed(2)}`);

                    // let n = sortedValuesPaid[i] - snitt
                    // console.log(n)
                    // sortedValuesPaid[i] -= n
                    // sortedValuesPaid[j] += n

                    // console.log(sortedValuesPaid[i].toFixed(2))
                    // console.log(sortedValuesPaid[j].toFixed(2))
 
                 //    if (n < snitt) {
                 //        j--
                 //        console.log(sortedValuesPaid[j] - snitt)
                 //    } else {
                 //         j--
                 //         console.log('poop')
                 //         console.log(sortedValuesPaid[j] - snitt)
                 //    }
                 //    j--;
                 //    console.log(sortedPeople[i], (sortedValuesPaid[j] - snitt))
            }
        },
        splitPayments2(payments) {
            const people = Object.keys(payments);
            const valuesPaid = Object.values(payments);

            const sum = valuesPaid.reduce((acc, curr) => curr + acc);
            const mean = sum / people.length;

            const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]);
            const sortedValuesPaid = sortedPeople.map((person) => payments[person] - mean);

            let i = 0;
            let j = sortedPeople.length - 1;
            // let debt;

                while (i < j) {
                let debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
                sortedValuesPaid[i] += debt;
                sortedValuesPaid[j] -= debt;

                console.log(`${sortedPeople[i]} owes ${sortedPeople[j]} $${debt.toFixed(2)}`);

                    if (sortedValuesPaid[i] === 0) {
                    i++;
                    }

                    if (sortedValuesPaid[j] === 0) {
                    j--;
                    }
                }
            }
        }
    }
</script>

<style>
    .multires {
        text-align: center;
        padding: 2rem;
        height: 90%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .multires__list {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
</style>