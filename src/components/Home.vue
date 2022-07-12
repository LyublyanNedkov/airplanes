<template>
    <div class="container container-fluid container-home">
        <div class="row justify-content-center">
            <!-- <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">                                
                <ul v-for="(value, key, index) in cars" :key="index">
                    {{ key }}
                    <li v-for="(subvalue, index) in value" :key="index + 'a'">{{ subvalue }}</li>
                </ul>                
            </div> -->
            <!-- <HomeTestOne />
            <HomeTestTwo />
            <HomeTestThree :parentTestName="parentTestName" :parentTestLevel="parentTestLevel" />
            <HomeTable />
            <IceCreamMain />
            <div v-for="(value, key, index) in images" :key="index">
                <img :src="value.imgOne" alt="pic" width="1300rem" height="800rem">
            </div>
            <HomeEmitEvent @change-number="newNumber" />
            <p style="color: white;">My number: {{ number }}</p>
            <HomeEE1 @change-name-p="newNameP" @change-name-s="newNameS" />
            <p style="color: white;">My food: {{ name }}</p>
            <p style="color: white;">My food: {{ spageti }}</p> -->
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
                parentTestName: 'Test Three',
                parentTestLevel: 'Level: 2',
                images: [
                    { imgOne: require('@/assets/Body_kit3.jpg') }
                ],
                number: 0,
                name: 'Pizza',
                spageti: 'Spageti'
            }
        },
        methods: {
            newNumber(newValue) {
                this.number = newValue
            },
            newNameP(newValue) {
                this.name = newValue
            },
            newNameS(newValue) {
                this.name = newValue
            }
        }
    }
</script>

<style scoped>
    
</style>

