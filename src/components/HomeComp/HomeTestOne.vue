<template>
    <div class="container">
        <div class="container-test-one">
            <div class="row justify-content-center">
                <div class="col col-sm-2 col-lg-2 col-xxl-2 text-center">                                
                    <div class="card card-test-one">
                        <p>Test One</p>
                        <p>Level: 1</p>
                        <p>Importing one component into another</p>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTestOne',
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .card-test-one {
        color: green;
        border: 5px solid green;
        border-radius: 10px;
        /* margin-top: 8rem; */
        font-size: 1.5rem;
        font-weight: bold;
        background-color: black;
    }
</style>