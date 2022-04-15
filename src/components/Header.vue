<template>
    <div class="container-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="row container-fluid">
                <router-link to="/" class="col-xxl-1 col-md-1 col-sm-1 navbar-brand btnLogo">
                    <img src="../assets/Audi_logo.jpg" alt="logo" class="audi_logo">
                </router-link>
                <button class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item col-xxl-4 col-md-1">
                            <router-link class="btnProducts" to="/Portfolio">Products</router-link>
                        </li>                 
                        <li class="nav-item col-xxl-4 col-md-1">
                            <router-link class="btnContacts" to="/Contacts">Offices</router-link>
                        </li>
                        <li class="nav-item col-xxl-4 col-md-1">
                            <router-link class="btnSC" to="/ShoppingCart"><box-icon name='cart'></box-icon>({{ sc }})</router-link>
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
    }
</script>

<style scoped>

</style>



