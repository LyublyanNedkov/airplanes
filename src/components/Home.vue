<template>
    <div class="container container-fluid container-home">
        <div class="row justify-content-center">
            <!-- <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">                                
                <ul v-for="(value, key, index) in cars" :key="index">
                    {{ key }}
                    <li v-for="(subvalue, index) in value" :key="index + 'a'">{{ subvalue }}</li>
                </ul>                
            </div> -->
            <HomeTestOne />
            <HomeTestTwo />
            <HomeTestThree :parentTestName="parentTestName" :parentTestLevel="parentTestLevel" />
            <HomeTable />
            <IceCreamMain />
            <div v-for="(value, key, index) in images" :key="index">
                <img :src="value.imgOne" alt="pic" width="1300rem" height="800rem">
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


    export default {
        name: 'Home',
        components: {
            HomeTable,
            HomeTestOne,
            HomeTestTwo,
            HomeTestThree,
            IceCreamMain
        },
        props: ['models'],
        data() {
            return {
                parentTestName: 'Test Three',
                parentTestLevel: 'Level: 2',
                images: [
                    { imgOne: require('@/assets/Body_kit3.jpg') }
                ]
            }
        },
    }
</script>

<style scoped>
    
</style>

