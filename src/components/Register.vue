<template>
    <div class="register">
        <h1 class="register-text">Register</h1>
        <form @submit.prevent="Register">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit" value="Register">
            <p>Have an account? <router-link to="/Login">Login here</router-link></p>
        </form>
    </div>    
</template>

<script>
    import { ref } from 'vue'

    export default {
        name: 'Register',
        setup() {
            const email = ref("");
            const password = ref("");

            const Password = () => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                    .then(user => {
                        alert(user);
                    })
                    .catch(err => alert(err.message));
            }
            return {
                Register,
                email,
                password
            }
        }
    }
</script>

<style scoped>  

</style>