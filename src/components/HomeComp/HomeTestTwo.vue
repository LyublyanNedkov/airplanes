<template>
    <div class="container">            
        <div class="container-test-two">
            <div class="row justify-content-center">
                <div class="col col-sm-12 col-lg-12 col-xxl-2 text-center">                                
                    <div class="card card-test-two" v-for="test in testove" :key="test">
                        <p>{{ test.testName }}</p>
                        <p>{{ test.testLevel }}</p>
                        <p>Importing from Vuex</p>
                    </div>                
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'HomeTestTwo',
        props: ['testove'],
        computed: {
            testove() {
                return this.$store.state.testove
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .card-test-two {
        color: red;
        border: 5px solid red;
        border-radius: 10px;
        /* margin-top: 8rem; */
        font-size: 1.5rem;
        font-weight: bold;
        background-color: black;
    }
</style>