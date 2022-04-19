<template>
    <div class="container container-gearbox">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-secondary">{{ list.A4_manual }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/A4_B8_Manual.jpg" alt="engine">
                            <p>Price: {{ price.A4_manual }}$</p>
                            <p>In stock: {{ inStock.A4_manual }} units</p>
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
                        <div class="card-header bg-secondary">{{ list.S_tronic }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/S_tronic_dc.jpg" alt="engine">
                            <p>Price: {{ price.S_tronic }}$</p>
                            <p>In stock: {{ inStock.S_tronic }} units</p>
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
                        <div class="card-header bg-secondary">{{ list.A4_automatic }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/A4_manual.jpg" alt="engine">
                            <p>Price: {{ price.A4 }}$</p>
                            <p>In stock: {{ inStock.A4 }} units</p>
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
                        <div class="card-header bg-secondary">{{ list.Seven_speed }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/Seven_speed_dc.jpg" alt="engine">
                            <p>Price: {{ price.Seven_speed }}$</p>
                            <p>In stock: {{ inStock.Seven_speed }} units</p>
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
    name: 'Gearbox',
    data() {
            return {
                price: {
                    A4_manual: 10000,
                    S_tronic: 11000,
                    A4: 12000,
                    Seven_speed: 13000
                },
                inStock: {
                    A4_manual: 11,
                    S_tronic: 12,
                    A4: 13,
                    Seven_speed: 14
                },
                list: {
                    A4_manual: 'A4-manual',
                    S_tronic: 'S-tronic',
                    A4_automatic: 'A4-automatic',
                    Seven_speed: '7-speed'
                },
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