<template>
    <div class="container container-engine" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-warning">{{ list.RS3_breaks }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS3Break.jpg" alt="engine">
                            <p>Price: {{ price.RS3_breaks }}$</p>
                            <p>In stock: {{ inStock.RS3_breaks }} units</p>
                            <input type="number" class="form-control" placeholder="Quantity">
                            <br>
                            <button class="btn btn-primary btn-cart" @click="addToCart()">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header bg-warning">{{ list.RS4_breaks }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS4Break.jpg" alt="engine">
                            <p>Price: {{ price.RS4_breaks }}$</p>
                            <p>In stock: {{ inStock.RS4_breaks }} units</p>
                            <input type="number" class="form-control" placeholder="Quantity">
                            <br>
                            <button class="btn btn-primary btn-cart" @click="addToCart()">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header bg-warning">{{ list.S2_breaks }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S2Break.jpg" alt="engine">
                            <p>Price: {{ price.S2_breaks }}$</p>
                            <p>In stock: {{ inStock.S2_breaks }} units</p>
                            <input type="number" class="form-control" placeholder="Quantity">
                            <br>
                            <button class="btn btn-primary btn-cart" @click="addToCart()">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header bg-warning">{{ list.S4_breaks }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S4Break.jpg" alt="engine">
                            <p>Price: {{ price.S4_breaks }}$</p>
                            <p>In stock: {{ inStock.S4_breaks }} units</p>
                            <input type="number" class="form-control" placeholder="Quantity">
                            <br>
                            <button class="btn btn-primary btn-cart" @click="addToCart()">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breaks',
    data() {
            return {
                list: {
                    RS3_breaks: 'RS3',
                    RS4_breaks: 'RS4',
                    S2_breaks: 'S2',
                    S4_breaks: 'S4',
                },
                price: {
                    RS3_breaks: 10000,
                    RS4_breaks: 11000,
                    S2_breaks: 12000,
                    S4_breaks: 13000,
                },
                inStock: {
                    RS3_breaks: 11,
                    RS4_breaks: 12,
                    S2_breaks: 13,
                    S4_breaks: 14,
                }
            }
        },
        props: [],
        methods: {
            addToCart() {
                this.$emit('add-to-cart')
            }
        },   
        created() {
            bus.$on('dynheader')
        },
}
</script>

<style scoped>

</style>