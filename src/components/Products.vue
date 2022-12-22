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
                    {partName: 'Garmin', color: 'bg-black', link: '/Aviation/Garmin'},
                    {partName: 'Pratt & Whitney', color: 'bg-black', link: '/Aviation/PrattWhitney'},
                    {partName: 'Honeywell', color: 'bg-black', link: '/Aviation/Honeywell'},
                    {partName: 'Safran', color: 'bg-black', link: '/Aviation/Safran'},
                ]
            }
        }
    }
</script>

<style scoped>  
    
</style>

