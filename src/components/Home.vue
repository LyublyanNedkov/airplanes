<template>
    <div class="container container-fluid container-home">
        <div class="row justify-content-center">
            <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">                                
                <ul v-for="(value, key, index) in cars" :key="index">
                    {{ key }}
                    <li v-for="(subvalue, index) in value" :key="index + 'a'">{{ subvalue }}</li>
                </ul>                
            </div>
            <HomeTable />
        </div>
    </div>
</template>

<script>
    import HomeTable from './HomeComp/HomeTable.vue'

    export default {
        name: 'Home',
        components: {
            HomeTable
        },
        props: ['models'],
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
    
</style>

