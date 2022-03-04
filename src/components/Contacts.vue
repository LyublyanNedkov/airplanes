<template>
    <div class="container">
        <div class="text-contacts">
            <h1 class="text-contacts-h1">You can contact me if you need aditional information about the courses I offer, 
               private events and so on!
            </h1>
        </div>
        <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" class="form-control">
            <input type="text" aria-label="Last name" class="form-control">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Phone number</label>
             <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Enter text</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit text</button>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'Contacts',
    }
</script>

<style scoped> 
    .text-contacts {
        margin-top: 70px;
    }

    .input-group {
        margin-top: 50px;
    }

    .mb-3 {
        margin-top: 50px;
    }

    .btn-primary {
        margin-top: 19px;
        margin-left: 580px;
        background-color: lightseagreen;
        color: lightgreen;
        border: none;
        font-size: 25px;
    }

    .btn-primary:hover {
        background-color: lightgreen;
        color: lightseagreen;
    }
</style>