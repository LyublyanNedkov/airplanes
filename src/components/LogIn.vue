<template>
    <div class="login">
        <h1 class="login-text">Login</h1>
        <form @submit.prevent="Login" class="form-login">
            <input type="text" placeholder="Email" v-model="email">
            <br>
            <br>
            <input type="password" placeholder="Password" v-model="password">
            <br>
            <br>
            <input type="submit" value="Login">
            <p>Need an account? <router-link to="/Register">Register here</router-link></p>
            <button class="logout" @click="Logout">Logout</button>
        </form>
    </div>    
</template>

<script>
    import { ref } from 'vue'
    import { onBeforeMount } from '@vue/runtime-core';

    export default {
        name: 'LogIn',
        setup() {
            const email = ref("");
            const password = ref("");
            const name = ref("");

            onBeforeMount(() => {
                const user = firebase.auth().currentUser;
                if (user) {
                    name.value = user.email.split('@')[0];
                }
            });

            const Logout = () => {
                firebase
                    .auth()
                    .signOut()
                    .then(() => console.log("Signed out"))
                    .catch(err => alert(err.message));
            }
            return {
                name,
                Logout
            }

            const Login = () => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                    .then(data => console.log(data))
                    .catch(err => alert(err.message));
            }
            return {
                Login,
                email,
                password
            }
        }
    }
</script>

<style scoped>  

</style>