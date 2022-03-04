<template>
    <div>
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
</style>