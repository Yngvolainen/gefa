<template>
    <header class="header">
        <router-link :to="{ name: 'home' }" class="header__logo">
            <h1>gefa</h1>
        </router-link>

        <menu class="header__menu">
            <button class="header__menu-button" @click="toggleMenu">
                <img src="/images/menu-white.svg" alt="menu">
            </button>
        </menu>
        <Menu v-if="menuVisible" @toggle="toggleMenu" />
    </header>
</template>

<script>
import Menu from './Menu.vue'
export default {
    components: {
        Menu
    },
    data() {
        return {
            menuVisible: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuVisible = !this.menuVisible
        }
    }
}
</script>

<style>
    .header {
        padding: 0.2rem 0.8rem;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .header__logo {
        color: var(--foreground);
        text-decoration: none;
        font-family: var(--font-logo);
    }

    .header__menu-button img {
        width: 2rem;
    }
</style>