<template>
    <div class="container container-engine" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-my">{{ list.El_Turbocharger }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/El-Turbocharger.jpg" alt="engine">
                            <p>Price: {{ price.El_Turbocharger }}$</p>
                            <p>In stock: {{ inStock.El_Turbocharger }} units</p>
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
                        <div class="card-header bg-my">{{ list.TTE440l }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/TTE440l.jpg" alt="engine">
                            <p>Price: {{ price.TTE440l }}$</p>
                            <p>In stock: {{ inStock.TTE440l }} units</p>
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
                        <div class="card-header bg-my">{{ list.TTE710 }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/TTE710.jpg" alt="engine">
                            <p>Price: {{ price.TTE710 }}$</p>
                            <p>In stock: {{ inStock.TTE710 }} units</p>
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
                        <div class="card-header bg-my">{{ list.A06K145722H }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/06K145722H.jpg" alt="engine">
                            <p>Price: {{ price.A06K145722H }}$</p>
                            <p>In stock: {{ inStock.A06K145722H }} units</p>
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
    name: 'Turbocharger',
    data() {
            return {
                list: {
                    El_Turbocharger: 'El-Turbocharger',
                    TTE440l: 'TTE440l',
                    TTE710: 'TTE710',
                    A06K145722H: 'A06K145722H'
                },
                price: {
                    El_Turbocharger: 10000,
                    TTE440l: 11000,
                    TTE710: 12000,
                    A06K145722H: 13000
                },
                inStock: {
                    El_Turbocharger: 11,
                    TTE440l: 12,
                    TTE710: 13,
                    A06K145722H: 14,
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