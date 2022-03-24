<template>
    <div class="container container-shoppingCart mt-3 mb-3">
        <p>{{ productName }}</p>
        <p>{{ productCost }} $</p>
        <p>{{ cartLength }} in cart</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'ShoppingCart',
        computed: {
            ...mapGetters([
                'productName',
                'productCost',
                'cartLength',
            ]),
        },
    }
</script>

<style scoped>

</style>