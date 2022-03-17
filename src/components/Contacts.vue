<template>
    <div class="container container-fluid container-contacts">
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-11 text-center">
                <div class="text-contacts">
                    <h1 class="text-contacts-h1">You can contact me if you need aditional information about the
                                                 courses I offer, private events and so on!
                    </h1>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                <div class="input-group">
                    <span class="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" class="form-control" v-model="user.username">
                    <input type="text" aria-label="Last name" class="form-control">
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" 
                           class="form-control" 
                           id="exampleFormControlInput1" 
                           placeholder="name@example.com"
                           v-model="user.email">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                    <label for="formGroupExampleInput" class="form-label">Phone number</label>
                    <input type="text" 
                           class="form-control" 
                           id="formGroupExampleInput" 
                           placeholder="Example input placeholder"
                           v-model="user.phone">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                <label for="exampleFormControlTextarea1" class="form-label">Enter text</label>
                <textarea class="form-control" 
                          id="exampleFormControlTextarea1" 
                          rows="3" 
                          v-model="user.text">
                </textarea>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                <button class="btn-submit" type="submit" @click="submit">Submit text</button>              
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                <button class="btn-submit" type="submit" @click="fetchData">Get Data</button>        
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users" v-bind:key="u">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'Contacts',
        data() {
            return {
                user: {
                    username: '',
                    email: '',
                    phone: '',
                    text: '',
                },
                users: [],
            };
        },
        methods: {
            submit() {
                this.$http.post('', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
            },
            fetchData() {
                this.$http.get('')
                    .then(response => {
                        return response.json() ;
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            }
        }
    }
</script>

<style scoped> 

</style>