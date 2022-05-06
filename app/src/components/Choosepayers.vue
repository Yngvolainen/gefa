<template>
    <router-link :to="{ name: `${link}` }" class="choosepayers">
        <h2>{{title}}</h2>
    </router-link>
</template>

<script>
export default {
    props: [
        'title',
        'link'
    ]
    // data() {
    //     return {

    //     }
    // }
}
</script>

<style>
    .choosepayers {
        color: var(--foreground);
        background: var(--highlight);
        text-decoration: none;
        padding: var(--button-padding-big);
        border-radius: 25px;
    }
</style>