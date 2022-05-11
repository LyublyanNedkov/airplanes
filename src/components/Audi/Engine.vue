<template>
    <div class="container container-engine" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color bg-primary">{{ name.RS7 }}</div>
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
                        <div class="card-header bg-primary">{{ name.RS6_Avant }}</div>
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
                        <div class="card-header bg-primary">{{ name.RS6 }}</div>
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
                        <div class="card-header bg-primary">{{ name.RS4_Avant }}</div>
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
                        <div class="card-header bg-primary">{{ name.RS4 }}</div>
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
                        <div class="card-header bg-primary">{{ name.RS3 }}</div>
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
                        <div class="card-header bg-primary">{{ name.RS5 }}</div>
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
                        <div class="card-header bg-primary">{{ name.RS8 }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" src="../../assets/RS8.jpg" alt="engine">
                            <p>Price: {{ price.RS8 }}$</p>
                            <p>In stock: {{ inStock.RS8 }} units</p>
                            <input type="number" class="form-control" placeholder="Quantity">
                            <br>
                            <button class="btn btn-primary btn-cart" @click="addToMCart()">ADD TO CART</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        <!-- v-for="m in models" :key="m" -->
        <table class="table"> 
            <thead>
                <tr style="background-color: white;">
                    <th scope="col">#</th>
                    <th scope="col">Model</th>
                    <th scope="col">Horse Power</th>
                    <th scope="col">Price $</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-primary">
                    <th scope="row">1</th>
                    <!-- <td>{{ model.RS6 }}</td>
                    <td>{{ HorsePower.RS6 }}</td>
                    <td>{{ price.RS6 }}</td> -->
                    <td>RS6</td>
                    <td>600</td>
                    <td>80000</td>
                </tr>
                <tr class="table-secondary">
                    <th scope="row">2</th>
                    <!-- <td>{{ model.RS3 }}</td>
                    <td>{{ HorsePower.RS3 }}</td>
                    <td>{{ price.RS3 }}</td> -->
                    <td>RS3</td>
                    <td>500</td>
                    <td>50000</td>
                </tr>
                <tr class="table-success">
                    <th scope="row">3</th>
                    <!-- <td>{{ model.RS7 }}</td>
                    <td>{{ HorsePower.RS7 }}</td>
                    <td>{{ price.RS7 }}</td> -->
                    <td>RS7</td>
                    <td>700</td>
                    <td>60000</td>
                </tr>
                <tr class="table-danger">
                    <th scope="row">4</th>
                    <!-- <td>{{ model.RS5 }}</td>
                    <td>{{ HorsePower.RS5 }}</td>
                    <td>{{ price.RS5 }}</td> -->
                    <td>RS5</td>
                    <td>400</td>
                    <td>70000</td>
                </tr>
                <tr class="table-warning">
                    <th scope="row">5</th>
                    <!-- <td>{{ model.RS4 }}</td>
                    <td>{{ HorsePower.RS4 }}</td>
                    <td>{{ price.RS4 }}</td> -->
                    <td>RS4</td>
                    <td>450</td>
                    <td>45000</td>
                </tr>
                <tr class="table-info">
                    <th scope="row">6</th>
                    <!-- <td>{{ model.RSQ8 }}</td>
                    <td>{{ HorsePower.RSQ8 }}</td>
                    <td>{{ price.RSQ8 }}</td> -->
                    <td>RSQ8</td>
                    <td>650</td>
                    <td>95000</td>
                </tr>
                <tr class="table-light">
                    <th scope="row">7</th>
                    <!-- <td>{{ model.S8 }}</td>
                    <td>{{ HorsePower.S8 }}</td>
                    <td>{{ price.S8 }}</td> -->
                    <td>S8</td>
                    <td>550</td>
                    <td>85000</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Engine',
        props: ['models'],
        data() {
            return {
                name: {
                    RS7: 'RS7',
                    RS6_Avant: 'RS6-Avant',
                    RS6: 'RS6',
                    RS4_Avant: 'RS4-Avant',
                    RS4: 'RS4',
                    RS3: 'RS3',
                    RS5: 'RS5',
                    RS8: 'RS8'
                },
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
                },
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart')
            },

            submit() {
                this.$http.post('', this.name)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
            },

            fetchData() {
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => console.log(data));
            }
        }
    }
</script>

<style scoped>

</style>