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

