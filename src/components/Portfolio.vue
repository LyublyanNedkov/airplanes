<template>
    <div>
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

        <div class="container">
            <div class="row">
                <div class="col">                   
                    <img class="pic" src="../assets/pic1.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic2.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic3.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic4.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic5.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic6.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic7.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic8.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic9.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic10.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic11.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic12.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic13.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic14.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic15.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic16.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic17.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic18.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic19.jpg" alt="pic">
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic20.jpg" alt="pic">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Portfolio',
    }
</script>

<style scoped>  
    /* Mobile */
    .container {
        margin-top: 50px;
        margin-left: 38px;
    }

    .pic {
        width: 300px;
        height: 300px;
        border: 1px solid black;
    }

    .col {
        padding: 5px;
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
        margin-left: 110px;
    }

    .btnB {
        font-size: 40px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 110px;
    }

    .btnA {
        font-size: 40px;
        color: lightgreen;
        text-decoration: none;
        margin-left: 110px;
    }

    .navbar-nav {
        margin-top: 20px;
    }

    /* Deskotop */
    @media screen and (min-width: 1140px) and (max-width: 1920px) {
        .container {
            margin-top: 50px;
        }

        .container img {
            transition: 1s;
        }

        .container img:hover {
            transform: scale(1.1);
        }

        .pic {
            width: 300px;
            height: 300px;
            border: 1px solid black;
            transform: translate(1.1);
        }

        .col {
            padding: 5px;
        }
    }
</style>

 

    