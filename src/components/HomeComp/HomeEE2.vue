<template>
    <div class="container">
        <div class="container-test-one color-div">
            <div class="row justify-content-center">
                <div class="col col-sm-2 col-lg-2 col-xxl-2 text-center">                                
                    <div class="card card-test-one">
                        <button @click="changeName">Change name</button>
                        <p style="color: black;">Test Six</p>
                        <p style="color: black;">Level: 2</p>
                        <p style="color: black;">Emite Event</p>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeEE2',
        data() {
            return {
                name: 'Spageti'
            }
        },
        methods: {
            changeName() {
                this.name = 'Spageti'
                this.$emit('change-name', this.name)
            },
        }
    }
</script>

<style scoped>
    .color-div {
        background-color: green;
        height: 24rem;
    }
</style>