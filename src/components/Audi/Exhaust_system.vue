<template>
    <div class="container container-exhaust" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-dark">{{ list.A4Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/A4Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.A4Exhaust }}$</p>
                            <p>In stock: {{ inStock.A4Exhaust }} units</p>
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
                        <div class="card-header bg-dark">{{ list.A7Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/A7Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.A7Exhaust }}$</p>
                            <p>In stock: {{ inStock.A7Exhaust }} units</p>
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
                        <div class="card-header bg-dark">{{ list.B8Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/B8Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.B8Exhaust }}$</p>
                            <p>In stock: {{ inStock.B8Exhaust }} units</p>
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
                        <div class="card-header bg-dark">{{ list.R8Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/R8Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.R8Exhaust }}$</p>
                            <p>In stock: {{ inStock.R8Exhaust }} units</p>
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
                        <div class="card-header bg-dark">{{ list.S3Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S3Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.S3Exhaust }}$</p>
                            <p>In stock: {{ inStock.S3Exhaust }} units</p>
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
                        <div class="card-header bg-dark">{{ list.S5Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S5Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.S5Exhaust }}$</p>
                            <p>In stock: {{ inStock.S5Exhaust }} units</p>
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
                        <div class="card-header bg-dark">{{ list.S6Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S6Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.S6Exhaust }}$</p>
                            <p>In stock: {{ inStock.S6Exhaust }} units</p>
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
                        <div class="card-header bg-dark">{{ list.S8Exhaust }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S8Exhaust.jpg" alt="engine">
                            <p>Price: {{ price.S8Exhaust }}$</p>
                            <p>In stock: {{ inStock.S8Exhaust }} units</p>
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
export default {
    name: 'Exhaust_system',
    data() {
            return {
                list: {
                    A4Exhaust: 'A4',
                    A7Exhaust: 'A7',
                    B8Exhaust: 'B8',
                    R8Exhaust: 'R8',
                    S3Exhaust: 'S3',
                    S5Exhaust: 'S5',
                    S6Exhaust: 'S6',
                    S8Exhaust: 'S8'
                },
                price: {
                    A4Exhaust: 10000,
                    A7Exhaust: 11000,
                    B8Exhaust: 12000,
                    R8Exhaust: 13000,
                    S4Exhaust: 14000,
                    S5Exhaust: 15000,
                    S6Exhaust: 16000,
                    S8Exhaust: 17000
                },
                inStock: {
                    A4Exhaust: 11,
                    A7Exhaust: 12,
                    B8Exhaust: 13,
                    R8Exhaust: 14,
                    S3Exhaust: 10,
                    S5Exhaust: 15,
                    S6Exhaust: 16,
                    S8Exhaust: 17
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