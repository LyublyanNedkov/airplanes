<template>
    <div class="container">
        <div class="container-test-one color-div">
            <div class="row justify-content-center">
                <div class="col col-sm-2 col-lg-2 col-xxl-2 text-center">                                
                    <div class="card card-test-one">
                        <button @click="changeNameP">Pizza</button>
                        <button @click="changeNameS">Spageti</button>
                        <p style="color: black;">Test Five</p>
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
        name: 'HomeEE1',
        data() {
            return {
                name: ['Pizza', 'Spageti']
            }
        },
        methods: {
            changeNameP() {
                this.name = 'Spageti'
                this.$emit('change-name-p', this.name)
            },
            changeNameS() {
                this.name = 'Pizza'
                this.$emit('change-name-s', this.name)
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