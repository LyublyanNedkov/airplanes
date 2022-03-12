<template>
    <div class="container container-audi">
        <div class="row justify-content-center text-center my-row">
            <div class="col col-xxl-3 text-center my-col">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">
                        <router-link class="btn-engine btn-a" to="Engine">Engine</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-engine img-a" src="../assets/Engine.jpg" alt="engine">
                        <h5 class="card-title">Choose an engine!</h5>
                        <p class="card-text">Audi offers some of the best engines on the market.
                                            You can choose from a huge plethora of diesel or gas engines.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <div class="card text-white bg-secondary mb-3">
                    <div class="card-header">
                        <router-link class="btn-gearbox btn-a" to="Gearbox">Gearbox</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-gearbox img-a" src="../assets/Gearbox.jpg" alt="gearbox">
                        <h5 class="card-title">Choose a gearbox!</h5>
                        <p class="card-text">Audi offers some of the best gearboxes on the market.
                                            You can choose from a huge plethora of manual or automatic gearboxes.</p>
                    </div>
                </div>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <div class="card text-white bg-success mb-3">
                    <div class="card-header">
                        <router-link class="btn-bodykit btn-a" to="Bodykit">Bodykit</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-bodykit img-a" src="../assets/Bodykit.jpg" alt="bodykit">
                        <h5 class="card-title">Choose a bodykit!</h5>
                        <p class="card-text">Audi offers some of the best bodykits on the market.
                                            You can choose from a huge plethora of full or partial bodykits.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <div class="card text-white bg-danger mb-3">
                    <div class="card-header">
                        <router-link class="btn-wheels btn-a" to="Wheels">Wheels</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-wheels img-a" src="../assets/Wheels.jpg" alt="wheels">
                        <h5 class="card-title">Choose wheels!</h5>
                        <p class="card-text">Audi offers some of the best wheels on the market.
                                            You can choose from a huge plethora of alloy wheels and rims.
                        </p>
                    </div>
                </div>
            </div>
        <div class="row justify-content-center text-center my-row2">
            <div class="col col-xxl-3 text-center my-col">
                <div class="card text-white bg-warning mb-3">
                    <div class="card-header">
                        <router-link class="btn-breaks btn-a" to="Breaks">Breaks</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-breaks img-a" src="../assets/Breaks.jpg" alt="breaks">
                        <h5 class="card-title">Choose breaks!</h5>
                        <p class="card-text">Audi offers some of the best breaks on the market.
                                            You can choose from a huge plethora of carbon steel or ceramic breaks.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <div class="card text-white bg-info mb-3">
                    <div class="card-header">
                        <router-link class="btn-suspension btn-a" to="Suspension">Suspension</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-suspension img-a" src="../assets/Suspension.jpg" alt="suspension">
                        <h5 class="card-title">Choose a suspension!</h5>
                        <p class="card-text">Audi offers some of the best suspensions on the market.
                                            You can choose from a huge plethora of coilover or magnetic suspensions.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <div class="card bg-my mb-3">
                    <div class="card-header">
                        <router-link class="btn-turbocharger btn-a" to="Turbocharger">Turbocharger</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-turbocharger img-a" src="../assets/Turbocharger.jpg" alt="turbocharger">
                        <h5 class="card-title">Choose a turbocharger!</h5>
                        <p class="card-text">Audi offers some of the best turbochargers on the market.
                                            You can choose from a huge plethora of turbochargers.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-xxl-3 text-center my-col">
                <div class="card text-white bg-dark mb-3">
                    <div class="card-header">
                        <router-link class="btn-exhaust btn-a" to="Exhaust">Exhaust system</router-link>
                    </div>
                    <div class="card-body">
                        <img class="img-exhaust img-a" src="../assets/Exhaust_system.jpg" alt="exhaust">
                        <h5 class="card-title">Choose an exhaust!</h5>
                        <p class="card-text">Audi offers some of the best exhuasts on the market.
                                            You can choose from a huge plethora of single or dual exhausts.
                        </p>
                    </div>
                </div>
            </div>
        </div>           
        </div>
    </div>
</template>

<script>
    import Engine from './Audi/Engine.vue'

    export default {
        name: 'Audi',
        components: Engine,
    }
</script>

<style scoped>
    
</style>