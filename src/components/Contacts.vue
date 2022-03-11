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
                    <input type="text" aria-label="First name" class="form-control">
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
                           placeholder="name@example.com">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                    <label for="formGroupExampleInput" class="form-label">Phone number</label>
                    <input type="text" 
                           class="form-control" 
                           id="formGroupExampleInput" 
                           placeholder="Example input placeholder">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                <label for="exampleFormControlTextarea1" class="form-label">Enter text</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-xxl-10 col-lg-10 col-sm-10 text-center">
                <button class="btn-submit" type="submit">Submit text</button>              
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'Contacts',
    }
</script>

<style scoped> 

</style>