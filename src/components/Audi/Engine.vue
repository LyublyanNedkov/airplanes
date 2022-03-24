<template>
    <div class="container container-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <router-link class="audi-menu" to="../Audi">Menu</router-link>
                </transition> 
            </div>
        </div>
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color">RS7</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS7.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(product)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header">RS6-Avant</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS6-Avant.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(product)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header">RS6</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS6.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(product)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header">RS4-Avant</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS4-Avant.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(product)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>   
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header">RS4</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS4.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(product)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header">RS3</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS3.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(product)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header">{{ rs5Name }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS5.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(rs5Name)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header">{{ rs8.name }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS8.jpg" alt="engine">
                            <button class="btn btn-primary btn-cart" @click="addToCart(rs8)">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Engine',
        data() {
            return {
                rs8: { name: 'RS8', cost: 3 },
                rs5Name: 'RS5'
            }
        },
        methods: {
            addToCart(value) {
                this.$store.state.productName = value.name;
                this.$store.state.productCost = value.cost
            }
        }
    }
</script>

<style scoped>

</style>