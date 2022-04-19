<template>
        <div class="container container-engine" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-info">{{ list.Q5susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/Q5susp.jpg" alt="engine">
                            <p>Price: {{ price.Q5susp }}$</p>
                            <p>In stock: {{ inStock.Q5susp }} units</p>
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
                        <div class="card-header bg-info">{{ list.Q7susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/Q7susp.jpg" alt="engine">
                            <p>Price: {{ price.Q7susp }}$</p>
                            <p>In stock: {{ inStock.Q7susp }} units</p>
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
                        <div class="card-header bg-info">{{ list.SQ2susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/SQ2susp.jpg" alt="engine">
                            <p>Price: {{ price.SQ2susp }}$</p>
                            <p>In stock: {{ inStock.SQ2susp }} units</p>
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
                        <div class="card-header bg-info">{{ list.SQ7susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/SQ7susp.jpg" alt="engine">
                            <p>Price: {{ price.SQ7susp }}$</p>
                            <p>In stock: {{ inStock.SQ7susp }} units</p>
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
                        <div class="card-header bg-info">{{ list.A6susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/A6susp.jpg" alt="engine">
                            <p>Price: {{ price.A6susp }}$</p>
                            <p>In stock: {{ inStock.A6susp }} units</p>
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
                        <div class="card-header bg-info">{{ list.S8susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S8susp.jpg" alt="engine">
                            <p>Price: {{ price.S8susp }}$</p>
                            <p>In stock: {{ inStock.S8susp }} units</p>
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
                        <div class="card-header bg-info">{{ list.RS7susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS7susp.jpg" alt="engine">
                            <p>Price: {{ price.RS7susp }}$</p>
                            <p>In stock: {{ inStock.RS7susp }} units</p>
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
                        <div class="card-header bg-info">{{ list.A8susp }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/A8susp.jpg" alt="engine">
                            <p>Price: {{ price.A8susp }}$</p>
                            <p>In stock: {{ inStock.A8susp }} units</p>
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
    name: 'Suspension',
    data() {
            return {
                list: {
                    Q5susp: 'Q5',
                    Q7susp: 'Q7',
                    SQ2susp: 'SQ2',
                    SQ7susp: 'SQ7',
                    A6susp: 'A6',
                    S8susp: 'S8',
                    RS7susp: 'RS7',
                    A8susp: 'A8'
                },
                price: {
                    Q5susp: 10000,
                    Q7susp: 11000,
                    SQ2susp: 12000,
                    SQ7susp: 13000,
                    A6susp: 14000,
                    S8susp: 15000,
                    RS7susp: 16000,
                    A8susp: 17000
                },
                inStock: {
                    Q5susp: 10,
                    Q7susp: 11,
                    SQ2susp: 12,
                    SQ7susp: 13,
                    A6susp: 14,
                    S8susp: 15,
                    RS7susp: 16,
                    A8susp: 17
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