<template>
    <div class="container-header">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="row-5 container-fluid">
                <router-link class="col-xxl-2 col-md-2 col-sm-2 btnD" to="/" tag="p">LN Photography</router-link>
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
                        <li class="nav-item col-xxl-3 col-md-3">
                            <router-link class="btnA" to="Portfolio">Portfolio</router-link>
                        </li>
                        <li class="nav-item col-xxl-3 col-md-3">
                            <router-link class="btnB" to="Courses">Courses</router-link>
                        </li>                       
                        <li class="nav-item col-xxl-3 col-md-3">
                            <router-link class="btnC" to="Contacts">Contacts</router-link>
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

                                          


