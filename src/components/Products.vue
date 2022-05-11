<template>
    <div class="container container-audi">
        <div class="row justify-content-center text-center my-row1">


            <!-- <div v-for="(value, index) in buttons" :key="index" class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white mb-3" :class="value.color">
                        <div class="card-header">
                            <router-link class="btn-engine btn-a" :to="value.link">{{value.partName}}</router-link>
                        </div>
                    </div>
                </transition> 
            </div> -->


            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">
                            <router-link class="btn-engine btn-a" to="/Audi/Engine">Engine</router-link>
                        </div>
                    </div>
                </transition> 
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-secondary mb-3">
                        <div class="card-header">
                            <router-link class="btn-gearbox btn-a" to="/Audi/Gearbox">Gearbox</router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-success mb-3">
                        <div class="card-header">
                            <router-link class="btn-bodykit btn-a" to="/Audi/Bodykit">Bodykit</router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header">
                            <router-link class="btn-wheels btn-a" to="/Audi/Wheels">Wheels</router-link>
                        </div>
                    </div>
                </transition>
            </div>
        <div class="row justify-content-center text-center my-row2">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-warning mb-3">
                        <div class="card-header">
                            <router-link class="btn-breaks btn-a" to="/Audi/Breaks">Breaks</router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header">
                            <router-link class="btn-suspension btn-a" to="/Audi/Suspension">Suspension</router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card bg-my mb-3">
                        <div class="card-header">
                            <router-link class="btn-turbocharger btn-a" to="/Audi/Turbocharger">Turbocharger</router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">
                            <router-link class="btn-exhaust btn-a" to="/Audi/Exhaust">Exhaust system</router-link>
                        </div>
                    </div>
                </transition>
            </div>
        </div>           
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'Products',
        data() {
            return {
                show: false,
                buttons: [
                    {partName: 'Engine', color: 'bg-primary', link: '/Audi/Engine'},
                    {partName: 'Gearbox', color: 'bg-secondary', link: '/Audi/Gearbox'},
                    {partName: 'Bodykit', color: 'bg-success', link: '/Audi/Bodykit'},
                    {partName: 'Wheels', color: 'bg-danger', link: '/Audi/Wheels'},
                ],
                models: [
                    { model: 'RS6', price: 80000, HorsePower: 600},
                    { model: 'RS3', price: 50000, HorsePower: 500},
                    { model: 'RS7', price: 60000, HorsePower: 700},
                    { model: 'RS5', price: 70000, HorsePower: 400},
                    { model: 'RS4', price: 45000, HorsePower: 450},
                    { model: 'RSQ8', price: 95000, HorsePower: 650},
                    { model: 'S8', price: 85000, HorsePower: 500},
                ],
            }
        }
    }
</script>

<style scoped>  
    
</style>

