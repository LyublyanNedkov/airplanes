<template>
    <div class="cart-body">
        <table class="cart-table">
            <thead>
                <tr>
                    <th><span class="sr-only">Product image</span></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th><span class="sr-only">Product image</span>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(quantity, key ,i) in cart" :key="i">
                    <td><i class="iconfont-carrot iconfont-3x"></i></td>
                    <td>{{ key }}</td>
                    <td>${{ getPrice(key) }}</td>
                    <td class="center">{{ quantity }}</td>
                    <td>${{ quantity * getPrice(key) }}</td>
                    <td class="center"></td>
                        <button @click="remove(key)" class="btn btn-light cart-remove">&times;</button>
                    <td></td>
                </tr>
            </tbody>
        </table>
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