<template>
    <div class="container-register col-xxl-6 offset-xxl-3">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col col-sm-12 col-lg-12 col-xxl-12 text-center">
                    <h1 class="register-text">Register</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col col-sm-12 col-lg-12 col-xxl-10 text-center">
                        <p class="needAccount-text">Have an account? 
                            <router-link to="/Login" 
                                        class="registerHere-text">
                                        Login here
                            </router-link>
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col col-sm-12 col-lg-12 col-xxl-4 text-center">
                        <form @submit.prevent="Register" class="form-register">
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
                                <input type="submit" value="Register" class="btn-register">
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