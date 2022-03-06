<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-light">
             <div class="container-fluid">
                 <router-link class="btnD" to="/">LN Photography</router-link>
                 <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="btnA" to="Portfolio">Portfolio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="btnB" to="Courses">Courses</router-link>
                        </li>
                        <li class="nav-item">
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

                                      
