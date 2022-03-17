<template>
    <div class="container container-shoppingCart">
        <p>{{ product.name }}</p>
        <p>{{ product.cost }}</p>
        <p>{{ cart.length }} in cart</p>
    </div>
</template>

<script>
    export default {
        name: 'ShoppingCart',
    }
</script>

<style scoped>

</style>