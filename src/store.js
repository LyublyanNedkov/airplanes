import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        productName: '',
        productCost: 0,
        cartLength: 0
    },
    getters: {
        productName: state => {
            return state.productName;
        },
        productCost: state => {
            return state.productCost;
        },
        cartLength: state => {
            return state.cartLength;
        }
    },
}); 

