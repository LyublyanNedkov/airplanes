<template>
    <div class="container">
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
    /* Mobile */
    .text-contacts {
        margin-top: 70px;
    }

    .text-contacts-h1 {
        text-align: center;
    }

    .input-group {
        margin-top: 50px;
    }

    .mb-3 {
        margin-top: 50px;
    }

    .btn-primary {
        margin-top: 19px;
        margin-left: 115px;
        background-color: lightseagreen;
        color: lightgreen;
        border: none;
        font-size: 20px;
    }

    .ln {
        text-align: center;
        font-size: 50px;
        color: green;
    }

    .icon {
        width: 300px;
        height: 300px;
        margin-left: 40px;
        /* margin-top: -30px; */
    }

    .btnC {
        font-size: 40px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 95px;
    }

    .btnB {
        font-size: 40px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 95px;
    }

    .btnA {
        font-size: 40px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 95px;
    }

    .navbar-nav {
        margin-top: 20px;
    }

    /* Deskotop */
    @media screen and (min-width: 1140px) and (max-width: 1920px) {
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
    }
</style>