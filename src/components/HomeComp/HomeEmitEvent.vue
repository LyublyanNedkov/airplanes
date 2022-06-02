<template>
    <div class="container">
        <div class="container-test-one color-div">
            <div class="row justify-content-center">
                <div class="col col-sm-2 col-lg-2 col-xxl-2 text-center">                                
                    <div class="card card-test-one">
                        <button @click="changeNumber">Change number</button>
                        <p style="color: black;">Test Four</p>
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
        name: 'HomeEmitEvent',
        data() {
            return {
                number: 0
            }
        },
        methods: {
            changeNumber() {
                this.number += 1
                this.$emit('change-number', this.number)
            },
        }
    }
</script>

<style scoped>
    .color-div {
        background-color: blue;
        height: 24rem;
    }
</style>