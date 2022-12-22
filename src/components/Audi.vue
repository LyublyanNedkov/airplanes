<template>
    <div class="container container-audi">
        <div class="row justify-content-center text-center my-row1">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-black mb-3">
                        <div class="card-header">
                            <router-link class="btn-a" to="/Aviation/Garmin">Garmin</router-link>
                        </div>
                    </div>
                </transition> 
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-black mb-3">
                        <div class="card-header">
                            <router-link class="btn-a" to="/Aviation/PrattWhitney">Pratt & Whitney</router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-black mb-3">
                        <div class="card-header">
                            <router-link class="btn-a" to="/Aviation/Honeywell">Honeywell</router-link>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-black mb-3">
                        <div class="card-header">
                            <router-link class="btn-a" to="/Aviation/Safran">Safran</router-link>
                        </div>
                    </div>
                </transition>
            </div>          
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Audi',
        data() {
            return {
                show: false,
            }
        }
    }
</script>

<style scoped>
    
</style>