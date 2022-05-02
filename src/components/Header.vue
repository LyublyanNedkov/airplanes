<template>
    <div class="container-header">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top my-navbar">
            <div class="container-fluid">
                <router-link to="/" class="col-xxl-1 col-md-1 col-sm-1 navbar-brand btnLogo">
                    <img src="../assets/Audi_logo.jpg" alt="logo" class="audi_logo">
                </router-link>
                <button class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false"
                        aria-haspopup="true" 
                        aria-label="Toggle navigation"
                        @click="showMenu()">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="menuActive ? 'show' : ''" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item col-xxl-4 col-md-1">
                            <router-link class="btnProducts" to="/Products">Products</router-link>
                        </li>                 
                        <li class="nav-item col-xxl-4 col-md-1">
                            <router-link class="btnContacts" to="/Contacts">Contacts</router-link>
                        </li>
                        <li class="nav-item col-xxl-4 col-md-1">
                            <router-link class="btnLogIn" to="/LogIn">Log In</router-link>
                        </li>
                        <li class="nav-item col-xxl-4 col-md-1">
                            <router-link class="btnSC" 
                                        to="/ShoppingCart"
                                        @add-to-cart="updateCart">
                                <box-icon name='cart'></box-icon>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                cart: 0,
                menuActive: false
            }
        },
        methods: {
            updateCart() {
                this.cart += 1
            }, 
            addToCart() {
                this.$emit('add-to-cart')
            },
            showMenu() {
                this.menuActive = !this.menuActive
            }
        },
    }
</script>

<style scoped>

</style>



