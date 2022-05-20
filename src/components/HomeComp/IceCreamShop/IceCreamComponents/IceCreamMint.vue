<template>
    <div class="container">
        <div class="container-image" v-for="(value, key, index) in iceCreamPictures" :key="index">
            <img :src="value.iceCreamImg" alt="pic" width="400rem" height="400rem">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IceCreamMint',
        data() {
            return {
                iceCreamPictures: [
                    { iceCreamImg: require('@/assets/Mint.jpg') }
                ]
            }
        }
    }
</script>

<style scoped>
    
</style>