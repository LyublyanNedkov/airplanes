const state = {
    counter: 0,
};

const getters = {
    stringCounter: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: (state, paylod) => {
        state.counter += paylod;
    },
    decrement: (state, paylod) => {
        state.counter -= paylod;
    },
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({ commit }) => {
        setTimeout(() => {
            commit('increment');
        },1000);
    },
    asyncDecrement: ({ commit }) => {
        setTimeout(() => {
            commit('decrement');
        },1000);
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
}