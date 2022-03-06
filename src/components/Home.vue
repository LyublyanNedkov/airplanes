<template>
    <div>
        <img class="icon" src="../assets/Icon.jpg" alt="icon">
        <br>
        <p class="ln">LN Photography</p>
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
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style scoped>

</style>

             