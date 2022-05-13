<template>
    <div class="container">                                
        <div class="container-test-three">
            <div class="row justify-content-center">
                <div class="col col-sm-12 col-lg-12 col-xxl-2 text-center">                                
                    <div class="card card-test-three">
                        <p>{{ parentTestName }}</p>
                        <p>{{ parentTestLevel }}</p>
                        <p>From parent to child</p>
                        
                        
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTestThree',
    props: ['parentTestName', 'parentTestLevel'],
    computed: {
        
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .card-test-three {
        color: blue;
        border: 5px solid blue;
        border-radius: 10px;
        /* margin-top: 8rem; */
        font-size: 1.5rem;
        font-weight: bold;
        background-color: black;
    }
</style>