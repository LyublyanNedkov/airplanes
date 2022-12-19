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
            <div v-for="(value, key, index) in images" :key="index">
                <img class="AirportImg" :src="value.imgOne" alt="pic">
            </div>
        </div>
        <div class="row justify-content-center">
            <div v-for="(value, key, index) in images" :key="index">
                <img class="AirshowImg" :src="value.imgTwo" alt="pic">
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
                    { imgTwo: require('@/assets/Airshow.jpg') }
                ],
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    
</style>

