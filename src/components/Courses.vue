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

        <div class="text-beginner">
            <p class="text-beginner-B">Beginner</p>
            <p class="text-beginner-B1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quam necessitatibus ipsa consequuntur minus quod, non, 
                                        amet autem alias sint rerum voluptatum laborum voluptas 
                                        temporibus eos soluta reprehenderit? Veritatis, aliquam nesciunt!
            </p>
            <button class="beginner-btn">BUY NOW</button>
        </div>
        <div class="text-medium">
            <p class="text-medium-M">Medium</p>
            <p class="text-medium-M1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quam necessitatibus ipsa consequuntur minus quod, non, 
                                        amet autem alias sint rerum voluptatum laborum voluptas 
                                        temporibus eos soluta reprehenderit? Veritatis, aliquam nesciunt!
            </p>
            <button class="medium-btn">BUY NOW</button>
        </div>
        <div class="text-expert">
            <p class="text-expert-E">Expert</p>
            <p class="text-expert-E1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quam necessitatibus ipsa consequuntur minus quod, non, 
                                        amet autem alias sint rerum voluptatum laborum voluptas 
                                        temporibus eos soluta reprehenderit? Veritatis, aliquam nesciunt!
            </p>
            <button class="expert-btn">BUY NOW</button>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'Courses',
    }
</script>

<style scoped>  
    /* Mobile */
    .text-beginner {
        margin-top: 100px;
        margin-left: 20px;
        background-color: grey;
        width: 350px;
        height: 440px;
    }

    .text-beginner-B {
        color: lightgreen;
        font-size: 60px;
        text-align: center;
    }

    .text-beginner-B1 {
        color: lightgreen;
        font-size: 20px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
    }

    .beginner-btn {
        border: none;
        border-radius: 5px;
        font-size: 20px;
        background-color: lightseagreen;
        color: lightgreen;
        margin-left: 128px;
    }

    .text-medium {
        margin-top: 100px;
        margin-left: 20px;
        background-color: grey;
        width: 350px;
        height: 440px;
    }

    .text-medium-M {
        color: lightgreen;
        font-size: 60px;
        text-align: center;
    }

    .text-medium-M1 {
        color: lightgreen;
        font-size: 20px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
    }

    .medium-btn {
        border: none;
        border-radius: 5px;
        font-size: 20px;
        background-color: lightseagreen;
        color: lightgreen;
        margin-left: 128px;
    }

    .text-expert {
        margin-top: 100px;
        margin-left: 20px;
        background-color: grey;
        width: 350px;
        height: 440px;
    }

    .text-expert-E {
        color: lightgreen;
        font-size: 60px;
        text-align: center;
    }

    .text-expert-E1 {
        color: lightgreen;
        font-size: 20px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
    }

    .expert-btn {
        border: none;
        border-radius: 5px;
        font-size: 20px;
        background-color: lightseagreen;
        color: lightgreen;
        margin-left: 128px;
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

    /* Desktop */
    @media screen and (min-width: 1140px) and (max-width: 1920px) {
        .text-beginner {
            margin-top: 100px;
            margin-left: 480px;
            background-color: grey;
            width: 900px;
            height: 300px;
        }

        .text-beginner-B {
            color: lightgreen;
            font-size: 60px;
            text-align: center;
        }

        .text-beginner-B1 {
            color: lightgreen;
            font-size: 20px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .beginner-btn {
            border: none;
            border-radius: 5px;
            font-size: 30px;
            background-color: lightseagreen;
            color: lightgreen;
            margin-left: 380px;
        }

        .beginner-btn:hover {
            background-color: lightgreen;
            color: lightseagreen;
        }

        .text-medium {
            margin-top: 100px;
            margin-left: 480px;
            background-color: grey;
            width: 900px;
            height: 300px;
        }

        .text-medium-M {
            color: lightgreen;
            font-size: 60px;
            text-align: center;
        }

        .text-medium-M1 {
            color: lightgreen;
            font-size: 20px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .medium-btn {
            border: none;
            border-radius: 5px;
            font-size: 30px;
            background-color: lightseagreen;
            color: lightgreen;
            margin-left: 380px;
        }

        .medium-btn:hover {
            background-color: lightgreen;
            color: lightseagreen;
        }

        .text-expert {
            margin-top: 100px;
            margin-left: 480px;
            background-color: grey;
            width: 900px;
            height: 300px;
        }

        .text-expert-E {
            color: lightgreen;
            font-size: 60px;
            text-align: center;
        }

        .text-expert-E1 {
            color: lightgreen;
            font-size: 20px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .expert-btn {
            border: none;
            border-radius: 5px;
            font-size: 30px;
            background-color: lightseagreen;
            color: lightgreen;
            margin-left: 380px;
        }

        .expert-btn:hover {
            background-color: lightgreen;
            color: lightseagreen;
        }
    }
</style>