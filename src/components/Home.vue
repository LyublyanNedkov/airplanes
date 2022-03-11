<template>
    <div class="container container-fluid container-home">
        <div class="row justify-content-center">
            <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">
                <img class="icon" src="../assets/Icon.jpg" alt="icon">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">
                <p class="ln">LN Photography</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">
                <router-link class="audi-text" to="Audi">Sponsored by AUDI</router-link>
                <br>
                <img class="audi-img" src="../assets/Audi.jpg" alt="audi">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style scoped>

</style>

