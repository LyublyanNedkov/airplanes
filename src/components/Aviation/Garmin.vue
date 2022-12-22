<template>
    <div class="container container-engine" id="audi-engine">
        <div class="row justify-content-center text-center">
            <div class="col col-xxl-3 text-center my-col" v-for="(value, key, index) in koli" :key="index">
                <transition name="fade" appear="">
                    <div class="card border-dark mb-3">
                        <div class="card-header card-color" :class="value.color">{{ value.name }}</div>
                        <div class="card-body text-dark">
                            <img class="img-engine img-a" :src="value.pictures" alt="pic">
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <img class="AirportImg" src="../../assets/Airport.jpg" alt="pic">
        <img :src="value.pictures" alt="pic">
        <p>RWJIWRIJGPIRJGIR</p>
    </div>
</template>

<script>
    export default {
        name: 'Garmin',
        props: ['models'],
        data() {
            return {
                koli: [
                    { name: 'RS7', price: 10000, inStock: 11, color: 'bg-primary', pictures: require('@/assets/RS7.jpg') },
                    { name: 'RS6-Avant', price: 11000, inStock: 12, color: 'bg-primary', pictures: require('@/assets/RS6-Avant.jpg') },
                    { name: 'RS6', price: 12000, inStock: 13, color: 'bg-primary', pictures: require('@/assets/RS6.jpg') },
                    { name: 'RS4-Avant', price: 13000, inStock: 14, color: 'bg-primary', pictures: require('@/assets/RS4-Avant.jpg') },
                    { name: 'RS4', price: 14000, inStock: 15, color: 'bg-primary', pictures: require('@/assets/RS4.jpg') },
                    { name: 'RS3', price: 15000, inStock: 16, color: 'bg-primary', pictures: require('@/assets/RS3.jpg') },
                    { name: 'RS5', price: 16000, inStock: 17, color: 'bg-primary', pictures: require('@/assets/RS5.jpg') },
                    { name: 'RS8', price: 17000, inStock: 18, color: 'bg-primary', pictures: require('@/assets/RS8.jpg') }
                ]
            }
        },
        methods: {
            submit() {
                this.$http.post('', this.name)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
            },

            fetchData() {
                this.$http.get('')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => console.log(data));
            }
        }
    }
</script>

<style scoped>

</style>