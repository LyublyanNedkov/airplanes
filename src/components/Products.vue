<template>
    <div class="container container-audi">
        <div class="row justify-content-center text-center my-row1">
            <div v-for="(value, index) in buttons" :key="index" class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white mb-3" :class="value.color">
                        <div class="card-header">
                            <router-link class="btn-engine btn-a" :to="value.link">{{value.partName}}</router-link>
                        </div>
                    </div>
                </transition> 
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
                    {partName: 'Breaks', color: 'bg-warning', link: '/Audi/Breaks'},
                    {partName: 'Suspension', color: 'bg-info', link: '/Audi/Suspension'},
                    {partName: 'Turbocharger', color: 'bg-my', link: '/Audi/Turbocharger'},
                    {partName: 'Exhaust system', color: 'bg-dark', link: '/Audi/Exhaust system'},
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

