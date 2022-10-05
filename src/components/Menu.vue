<template>
    <div class="menu">
        <ul @click="$emit('toggle')">
            <li>
                <router-link :to="{ name: 'single'}" class="menu__link">Single payer</router-link>
            </li>

            <p>---</p>

            <li>
                <router-link :to="{ name: 'multiple'}" class="menu__link">Multiple payers</router-link>
            </li>

            <p>---</p>

            <li>
                <router-link :to="{ name: 'setup'}" class="menu__link">Setup</router-link>            
            </li>
            
            <p>---</p>

            <li>
                <router-link :to="{ name: 'about'}"
                class="menu__link">About</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>
    .menu {
        text-align: center;
        width: 100%;
        background: rgba(0, 0, 0, 0.8);
        position: absolute;
        height: 200px;
        top: 50px;
        right: 0;
    }

    .menu__link {
        text-decoration: none;
        color: var(--foreground);
    }
</style>