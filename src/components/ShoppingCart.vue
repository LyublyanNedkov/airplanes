<template>
    <div class="container container-shoppingCart">

    </div>
</template>

<script>
    export default {
        name: 'ShoppingCart',
        data() {
            return {
                inventory: {
                    RS7: 0,
                    RS6Avant: 0,
                    RS6: 0,
                    RS4Avant: 0,
                },
                cart: {
                    RS7: 0,
                    RS6Avant: 0,
                    RS6: 0,
                    RS4Avant: 0,
                }
            }
        },
        methods: {
            addToCart(type) {
                this.cart[type] += this.inventory[type]
            }
        }
    }
</script>

<style scoped>

</style>