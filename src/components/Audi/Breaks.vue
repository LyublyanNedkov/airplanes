<template>
    <div class="container container-engine" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-warning">RS3</div>
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
                        <div class="card-header bg-warning">RS4</div>
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
                        <div class="card-header bg-warning">S2</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S2Break.jpg" alt="engine">
                            <p>Price: {{ price.S2_break }}$</p>
                            <p>In stock: {{ inStock.S2_break }} units</p>
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
                        <div class="card-header bg-warning">S4</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S4Break.jpg" alt="engine">
                            <p>Price: {{ price.S4_break }}$</p>
                            <p>In stock: {{ inStock.S4_break }} units</p>
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
                price: {
                    RS3_breaks: 10000,
                    RS4_breaks: 11000,
                    S2_break: 12000,
                    S4_break: 13000,
                },
                inStock: {
                    RS3_breaks: 11,
                    RS4_breaks: 12,
                    S2_break: 13,
                    S4_break: 14,
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