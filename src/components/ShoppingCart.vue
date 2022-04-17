<template>
    <div class="container container-shoppingCart mt-3 mb-3">
        <div id="appSC">
            <div class="nav-bar"></div>

            <div class="cart" :premium="premium" @add-to-cart="updateCart">Cart({{ cart.length }})</div>

            <div class="product-display">
                <div class="product-container">
                    <div class="product-info">
                        <h1>{{ title }}</h1>
                        <p v-if="inventory > 10">In stock</p>
                        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
                        <p v-else>Out of stock</p>
                        <ul>
                            <li v-for="detail in details" :key="detail">{{ detail }}</li>
                        </ul>
                        <div v-for="(variant, index) in variants" 
                            :key="variant.id" 
                            @mouseover="updateVariant(index)"
                            class="color-circle"
                            :style="{ backgroundColor: variant.color }">
                        </div>
                        <p>Shipping: {{ shipping }}</p>
                        <button class="button" 
                                :class="{ disabledButton: !inStock }"
                                @click="addToMyCart">
                                Add to cart
                        </button>
                        <br>
                        <form action="submit" class="review-form" @submit.prevent="onSubmit">
                            <h3>Leave a review</h3>
                            <label for="name">Name:</label>
                            <input id="name" v-model="name">

                            <label for="review">Review:</label>
                            <textarea id="review" v-model="review"></textarea>

                            <label for="rating">Rating:</label>
                            <select id="rating" v-model.number="rating">
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </form>
                        <ul v-for="engine in engines" :key="engine">
                            <li>{{ engine.id }} {{ engine.name }} {{ engine.price }}$</li>
                        </ul>
                        <div v-for="engine in engines" 
                            :key="engine">
                            {{ engine.id }} {{ engine.name }} {{ engine.price }}$
                        </div>
                        <br>
                        <button @click="error = !error">Toggle error</button>
                        <button @click="success = !success">Toggle Success</button>
                        <p v-if="error">Error!</p>
                        <p v-else-if="success">Success!</p>
                        <!-- <p v-show="error">Error!</p>
                        <p v-show="success">Success!</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    // import { bus } from '../main';

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
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            shipping() {
                if (this.premium) {
                    return 'Free'
                }
                return 2.99
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
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
                // bus.$emit('dynheader')
            },
            updateCart(id) {
                this.cart.push(id)
            },
            addToMyCart(type) {
                this.cart += 1
            },
            updateVariant(index) {
                this.selectedVariant = index
            },
        },
        data() {
            return {
                myImage: '../assets/Audi.jpg',
                inventory: {
                    RS3: 0,
                    RS6: 0,
                    RS8: 0,
                },
                cart: [],
                premium: true,
                product: 'Engines',
                brand: 'AUDI',
                selectedVariant: 0,
                inventory: 100,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    { id: 2234, color: 'green', image: '../assets/RS8.jpg', quantity: 50},
                    { id: 2235, color: 'blue', image: '../assets/RS3.jpg', quantity: 50},
                ],
                name: '',
                review: '',
                rating: null,
                engines: [
                    { id: 1, name: 'RS7', price: 5000 },
                    { id: 2, name: 'RS6-Avant', price: 4000 },
                    { id: 3, name: 'RS6', price: 6000 },
                    { id: 4, name: 'RS4-Avant', price: 7000 },
                    { id: 5, name: 'RS4', price: 3000 },
                    { id: 6, name: 'RS3', price: 8000 },
                    { id: 7, name: 'RS5', price: 9000 },
                    { id: 8, name: 'RS8', price: 2000 },
                ],
                error: false,
                success: false,
            } 
        },
        props: {
            premium: {
                type: Boolean,
                required: true,
            },
            shoppingCart: ['ShoppingCart'],
        },
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