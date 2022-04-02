<template>
    <div class="container container-shoppingCart mt-3 mb-3">
        <div id="appSC">
            <div class="nav-bar"></div>

            <div class="cart">Cart({{ cart }})</div>

            <div class="product-display">
                <div class="product-container">
                    <div class="product-image">
                        <img :src="image" alt="pic">
                    </div>
                    <div class="product-info">
                        <h1>{{ title }}</h1>
                        <p v-if="inventory > 10">In stock</p>
                        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
                        <p v-else>Out of stock</p>
                        <ul>
                            <li v-for="detail in details" :key="detail">{{ detail }}</li>
                        </ul>
                        <div v-for="variant in variants" 
                            :key="variant.id" 
                            @mouseover="updateImage(variant.image)"
                            class="color-circle"
                            :style="{ backgroundColor: variant.color }">
                        </div>
                        <button class="button" 
                                :class="{ disabledButton: !inStock }"
                                @click="addToMyCart"
                                :disabled="!inStock">
                                Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        name: 'ShoppingCart',
        components: {
            
        },
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
            title() {
                return this.brand + ' ' + this.product
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
            },
            addToMyCart() {
                this.cart += 1
            },
            updateImage(variantImage) {
                this.image = variantImage
            },
        },
        data() {
            return {
                inventory: {
                    RS3: 0,
                    RS6: 0,
                    RS8: 0,
                },
                cart: 0,
                product: 'Engines',
                brand: 'AUDI',
                image: '../assets/RS8.jpg',
                inventory: 100,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    { id: 2234, color: 'green', image: '../assets/RS8.jpg', quantity: 50},
                    { id: 2235, color: 'blue', image: '../assets/RS3.jpg', quantity: 0},
                ],
            } 
        },
        props: ['ShoppingCart'],
    }
</script>

<style scoped>
    .color-circle {
            width: 50px;
            height: 50px;
            margin-top: 8px;
            border: 2px solid #d8d8d8;
            border-radius: 50%;
    }

    .disabledButton {
        background-color: #d8d8d8;
        cursor: not-allowed;
    }
</style>