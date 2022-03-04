<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-light">
             <div class="container-fluid">
                 <router-link class="btnD" to="/">LN Photography</router-link>
                 <button class="navbar-toggler" 
                         type="button" 
                         data-bs-toggle="collapse" 
                         data-bs-target="#navbarNav" 
                         aria-controls="navbarNav" 
                         aria-expanded="false" 
                         aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                 </button>
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
    .navbar {
        background-color: grey;
    }

    .btnC {
        font-size: 25px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 100px;
    }

    .btnC:hover {
        color: lightseagreen;
    }

    .btnB {
        font-size: 25px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 100px;
    }

    .btnB:hover {
        color: lightseagreen;
    }

    .btnA {
        font-size: 25px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 1200px;
    }

    .btnA:hover {
        color: lightseagreen;
    }

    .btnD {
        font-size: 25px;
        color: lightgreen;
        text-decoration: none;
    }

    .btnD:hover {
        color: lightseagreen;
    }
</style>

                                      
