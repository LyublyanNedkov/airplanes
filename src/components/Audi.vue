<template>
    <div class="container container-audi">
        <div class="row justify-content-center text-center my-row1">
            <div class="col col-xxl-3 text-center my-col">
                <transition name="fade" appear="">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">
                            <router-link class="btn-engine btn-a" to="/Audi/Engine">Engine</router-link>
                        </div>
                        <div class="card-body">
                            <img class="img-engine img-a" src="../assets/Engine.jpg" alt="engine">
                            <h5 class="card-title">Choose an engine!</h5>
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
                        <div class="card-body">
                            <img class="img-gearbox img-a" src="../assets/Gearbox.jpg" alt="gearbox">
                            <h5 class="card-title">Choose a gearbox!</h5>
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
                        <div class="card-body">
                            <img class="img-bodykit img-a" src="../assets/Bodykit.jpg" alt="bodykit">
                            <h5 class="card-title">Choose a bodykit!</h5>
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
                        <div class="card-body">
                            <img class="img-wheels img-a" src="../assets/Wheels.jpg" alt="wheels">
                            <h5 class="card-title">Choose wheels!</h5>
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
                        <div class="card-body">
                            <img class="img-breaks img-a" src="../assets/Breaks.jpg" alt="breaks">
                            <h5 class="card-title">Choose breaks!</h5>
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
                        <div class="card-body">
                            <img class="img-suspension img-a" src="../assets/Suspension.jpg" alt="suspension">
                            <h5 class="card-title">Choose a suspension!</h5>
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
                        <div class="card-body">
                            <img class="img-turbocharger img-a" src="../assets/Turbocharger.jpg" alt="turbocharger">
                            <h5 class="card-title">Choose a turbocharger!</h5>
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
                        <div class="card-body">
                            <img class="img-exhaust img-a" src="../assets/Exhaust_system.jpg" alt="exhaust">
                            <h5 class="card-title">Choose an exhaust!</h5>
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
            .fade-enter {
            opacity: 0;
        }

        .fade-enter-active {
            transition: opacity 3s;
        }

        .fade-leave {
            /* opacity: 0; */
        }

        .fade-leave-active {
            transition: opacity 3s;
            opacity: 0;
        }
</style>