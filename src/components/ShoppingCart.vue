<template>
    <div class="container container-shoppingCart mt-3 mb-3">
        <p>{{ productName }}</p>
        <p>{{ productCost }} $</p>
        <p>{{ cartLength }} in cart</p>

        <h1>Vuex</h1>
        <p>Counter is: {{ counter }}</p> 
        <p>Number of clicks: {{ stringCounter }}</p>
        <input type="text" :value="value" @input="updateValue">
        <p>{{ value }}</p>
        <br>
        <p>{{ cart.RS8 }}</p>
        <br>
        <p>{{ cart.RS8 * 10000 }}</p>
        <br>
        <button class="btn btn-primary btn1" @click="increment(100)">Increment</button>
        <button class="btn btn-primary btn2" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex'

    export default {
        name: 'ShoppingCart',
        computed: {
            ...mapGetters([
                'productName',
                'productCost',
                'cartLength',
                'stringCounter',
            ]),
            value() {
                return this.$store.getters.value;
            },
            cartTotal() {
                return (this.cart.RS8 * 10000).toFixed(2)
            },
        },
        methods: {
            ...mapActions([
                'increment',
                'decrement',
            ]),
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value);
            },
            addToCart(type) {
                this.cart[type] += this.inventory[type]
            }
        },
        data() {
            return {
                inventory: {
                    RS3: 0,
                    RS6: 0,
                    RS8: 0,
                },
                cart: {
                    RS3: 0,
                    RS6: 0,
                    RS8: 0,
                }
            } 
        },
        props: ['ShoppingCart'],
    }
</script>

<style scoped>

</style>