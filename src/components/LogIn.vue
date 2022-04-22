<template>
    <div class="container-login col-xxl-6 offset-xxl-3">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">
                    <h1 class="login-text">Login</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col col-sm-12 col-lg-12 col-xxl-10 text-center">
                        <p class="needAccount-text">Need an account? 
                            <router-link to="/Register" 
                                        class="registerHere-text">
                                        Register here
                            </router-link>
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col col-sm-12 col-lg-12 col-xxl-4 text-center">
                        <form @submit.prevent="Login" class="form-login">
                        <div class="row justify-content-center">
                            <input type="text" 
                                    placeholder="Email" 
                                    v-model="email" 
                                    class="form">
                        </div>
                        <div class="row justify-content-center">
                            <input type="password" 
                                    placeholder="Password" 
                                    v-model="password" 
                                    class="pass">
                        </div>
                        <div class="row justify-content-center">
                            <div class="col col-sm-12 col-lg-12 col-xxl-4 text-center">
                                <input type="submit" value="Login" class="btn-login">
                            </div>
                        </div>
                        <!-- <div class="row justify-content-center">
                            <div class="col col-sm-12 col-lg-12 col-xxl-4 text-center">
                                <button class="btn-logout" @click="Logout">Logout</button>
                            </div>                        
                        </div> -->
                    </form>
                    </div>
                </div>
            </div>
        </div>
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