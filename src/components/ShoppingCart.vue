<template>
    <div>
        <ul>
            <li v-for="product in myproducts" :key="product">
                <span>{{ product.name }} </span>
                <span>{{ product.price }}$</span>
                <span>{{ product.inStock }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ShoppingCart',
        computed: {
            myproducts() {
                return this.$store.state.myproducts;
            }
        }
    }
</script>

<style scoped>

</style>