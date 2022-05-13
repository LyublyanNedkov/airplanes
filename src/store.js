import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations'; 

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        productName: '',
        productCost: 0,
        cartLength: 0,
        value: 0,
        myproducts: [
            { name: 'RS7', price: 10000, inStock: 11},
            { name: 'RS6-Avant', price: 11000, inStock: 12},
            { name: 'RS6', price: 12000, inStock: 13},
            { name: 'RS4-Avant', price: 13000, inStock: 14},
            { name: 'RS4', price: 14000, inStock: 15},
            { name: 'RS3', price: 15000, inStock: 16},
            { name: 'RS5', price: 16000, inStock: 17},
            { name: 'RS8', price: 17000, inStock: 18}
        ],
        testove: [
            { testName: 'Test Two', testLevel: 'Level: 1'}
        ],
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
        },
    },
    mutations,
    actions,
    modules: {
        counter,
    }
}); 

