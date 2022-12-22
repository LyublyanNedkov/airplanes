<template>
    <div class="container container-fluid container-home">
        <div class="row text-center">
            <p class="AviationNewsText">
                Aviation News
            </p>
            <p class="SecondText">
                We keep you up to date on the latest news about personal flying and share incisive, 
                relevant opinion on this ever changing activity.
            </p>
        </div>
        <div class="row justify-content-center">
            <div class="col">
                <img class="AirportImg" src="../assets/Airport.jpg" alt="pic">
                <p class="textOne">
                    <router-link to="" class="AirportBtn">The latest changes in airport security</router-link>
                </p>
            </div>
            <div class="col">
                <img class="AirshowImg" src="../assets/Airshow.jpg" alt="pic">
                <p class="textOne">
                    <router-link to="" class="AirshowBtn">Oshkosh Airventure 2022</router-link>
                </p>
            </div>
            <div class="col">
                <img class="AvionicsImg" src="../assets/Avionics.jpg" alt="pic">
                <p class="textOne">
                    <router-link to="" class="AvionicsBtn">What is new in the avionics systems</router-link>
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col">
                <img class="MaintenanceImg" src="../assets/Maintenance.jpg" alt="pic">
                <p class="textOne">
                    <router-link to="" class="MaintenanceBtn">Is maintenance geting more expensive</router-link>
                </p>
            </div>
            <div class="col">
                <img class="FlightTrainingImg" src="../assets/FlightTraining.jpg" alt="pic">
                <p class="textOne">
                    <router-link to="" class="FlightTrainingBtn">Flight school training</router-link>
                </p>
            </div>
            <div class="col">
                <img class="BioFuelImg" src="../assets/BioFuel.jpg" alt="pic">
                <p class="textOne">
                    <router-link to="" class="BioFuelBtn">What is new in the avionics systems</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeTable from './HomeComp/HomeTable.vue'
    import HomeTestOne from './HomeComp/HomeTestOne.vue'
    import HomeTestTwo from './HomeComp/HomeTestTwo.vue'
    import HomeTestThree from './HomeComp/HomeTestThree.vue'
    import IceCreamMain from './HomeComp/IceCreamShop/IceCreamMain.vue'
    import HomeEmitEvent from './HomeComp/HomeEmitEvent.vue'
    import HomeEE1 from './HomeComp/HomeEE1.vue'

    export default {
        name: 'Home',
        components: {
            HomeTable,
            HomeTestOne,
            HomeTestTwo,
            HomeTestThree,
            IceCreamMain,
            HomeEmitEvent,
            HomeEE1
        },
        props: ['models'],
        data() {
            return {
                images: [
                    { imgOne: require('@/assets/Airport.jpg') },
                    { imgTwo: require('@/assets/Airshow.jpg') },
                    { imgThree: require('@/assets/Avionics.jpg') }
                ],
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    
</style>

