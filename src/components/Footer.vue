<template>
    <div>                
        <footer class="footer">   
            <a href="https://www.facebook.com/">
                <box-icon class="btnD" type='logo' name='facebook-square'></box-icon>
            </a>
            <a href="https://www.instagram.com/">
                <box-icon class="btnE" type='logo' name='instagram-alt'></box-icon>
            </a>
            <a href="https://twitter.com/?lang=bg">
                <box-icon class="btnF" type='logo' name='twitter'></box-icon>
            </a>
            <br>
            <p class="text">© 2022 Copyright: LNPhotography.com</p>            
        </footer>
    </div>    
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>  
    /* Mobile */
    .footer {
        position: sticky;
        background-color: grey;
        margin-top: 50px;
    }

    .text {
        text-align: center;
        color: lightgreen;
        font-size: 20px;
    }

    .btnD {
        margin-left: 135px;
    }

    .btnE {
        margin-left: 20px;
    }

    .btnF {
        margin-left: 20px;
    }

    /* Desktop */
    @media screen and (min-width: 1140px) and (max-width: 1920px) {
        .footer {
            position: sticky;
            background-color: grey;
            margin-top: 50px;
        }

        .text {
            text-align: center;
            color: lightgreen;
            font-size: 20px;
        }

        .btnD {
            margin-left: 900px;
        }

        .btnE {
            margin-left: 20px;
        }

        .btnF {
            margin-left: 20px;
        }
    }
</style>