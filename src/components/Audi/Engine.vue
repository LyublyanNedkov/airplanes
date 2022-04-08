<template>
    <div class="container container-engine" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-primary">RS7</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS7.jpg" alt="engine">
                            <p>Price: {{ price.RS7 }}$</p>
                            <p>In stock: {{ inStock.RS7 }} units</p>
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
                        <div class="card-header bg-primary">RS6-Avant</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS6-Avant.jpg" alt="engine">
                            <p>Price: {{ price.RS6_Avant }}$</p>
                            <p>In stock: {{ inStock.RS6_Avant }} units</p>
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
                        <div class="card-header bg-primary">RS6</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS6.jpg" alt="engine">
                            <p>Price: {{ price.RS6 }}$</p>
                            <p>In stock: {{ inStock.RS6 }} units</p>
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
                        <div class="card-header bg-primary">RS4-Avant</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS4-Avant.jpg" alt="engine">
                            <p>Price: {{ price.RS4_Avant }}$</p>
                            <p>In stock: {{ inStock.RS4_Avant }} units</p>
                            <input type="number" class="form-control" placeholder="Quantity">
                            <br>
                            <button class="btn btn-primary btn-cart" @click="addToCart()">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>   
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header bg-primary">RS4</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS4.jpg" alt="engine">
                            <p>Price: {{ price.RS4 }}$</p>
                            <p>In stock: {{ inStock.RS4 }} units</p>
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
                        <div class="card-header bg-primary">RS3</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS3.jpg" alt="engine">
                            <p>Price: {{ price.RS3 }}$</p>
                            <p>In stock: {{ inStock.RS3 }} units</p>
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
                        <div class="card-header bg-primary">RS5</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS5.jpg" alt="engine">
                            <p>Price: {{ price.RS5 }}$</p>
                            <p>In stock: {{ inStock.RS5 }} units</p>
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
                        <div class="card-header bg-primary">RS8</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS8.jpg" alt="engine">
                            <p>Price: {{ price.RS8 }}$</p>
                            <p>In stock: {{ inStock.RS8 }} units</p>
                            <input type="number" class="form-control" placeholder="Quantity">
                            <br>
                            <button class="btn btn-primary btn-cart" @click="addToMyCart()">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    // import { bus } from '../main';

    export default {
        name: 'Engine',
        data() {
            return {
                price: {
                    RS7: 10000,
                    RS6_Avant: 11000,
                    RS6: 12000,
                    RS4_Avant: 13000,
                    RS4: 14000,
                    RS3: 15000,
                    RS5: 16000,
                    RS8: 17000
                },
                inStock: {
                    RS6_Avant: 11,
                    RS6: 12,
                    RS4_Avant: 13,
                    RS4: 14,
                    RS7: 10,
                    RS3: 15,
                    RS5: 16,
                    RS8: 17
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