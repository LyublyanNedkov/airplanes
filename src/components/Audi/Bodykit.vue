<template>
    <div class="container container-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-success">Front bumper</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/Body_kit3.jpg" alt="engine">
                            <p>Price: {{ price.front_bumper }}$</p>
                            <p>In stock: {{ inStock.front_bumper }} units</p>
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
                        <div class="card-header bg-success">Hood</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/Body_kit1.jpg" alt="engine">
                            <p>Price: {{ price.hood }}$</p>
                            <p>In stock: {{ inStock.hood }} units</p>
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
                        <div class="card-header bg-success">Rear-bumper</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/Body_kit4.jpg" alt="engine">
                            <p>Price: {{ price.rear_bumper }}$</p>
                            <p>In stock: {{ inStock.rear_bumper }} units</p>
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
                        <div class="card-header bg-success">Side-skirt</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/Body_kit2.jpg" alt="engine">
                            <p>Price: {{ price.side_skirt }}$</p>
                            <p>In stock: {{ inStock.side_skirt }} units</p>
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
    name: 'Bodykit',
    data() {
            return {
                price: {
                    front_bumper: 10000,
                    hood: 11000,
                    rear_bumper: 12000,
                    side_skirt: 13000
                },
                inStock: {
                    front_bumper: 11,
                    hood: 12,
                    rear_bumper: 13,
                    side_skirt: 14
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