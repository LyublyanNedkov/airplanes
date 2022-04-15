<template>
    <div class="container container-audi">
        <div class="row justify-content-center text-center my-row1">
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
                            <router-link class="btn-exhaust btn-a" to="/Audi/Exhaust_system">Exhaust system</router-link>
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
        name: 'Audi',
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style scoped>

</style>