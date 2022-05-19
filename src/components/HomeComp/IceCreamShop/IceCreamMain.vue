<template>
    <div class="container">
        <button @click="activeTab = 'IceCreamMint'" style="background-color: green;">Mint</button>
        <button @click="activeTab = 'IceCreamChocolate'" style="background-color: brown;">Chocolate</button>
        <button @click="activeTab = 'IceCreamOreo'" style="background-color: chocolate;">Oreo</button>

        <component :is="activeTab" /> 

        <!-- <IceCreamMint v-if="activeTab === 'IceCreamMint'" />
        <IceCreamChocolate v-if="activeTab === 'IceCreamChocolate'" />
        <IceCreamOreo v-if="activeTab === 'IceCreamOreo'" /> -->
    </div>
</template>

<script>
    import IceCreamMint from './IceCreamComponents/IceCreamMint.vue'
    import IceCreamChocolate from './IceCreamComponents/IceCreamChocolate.vue'
    import IceCreamOreo from './IceCreamComponents/IceCreamOreo.vue'

    export default {
        name: 'IceCreamMain',
        components: {
            IceCreamMint,
            IceCreamChocolate,
            IceCreamOreo
        },
        data() {
            return {
                activeTab: 'IceCreamMint'
            }
        }
    }
</script>

<style scoped>

</style>