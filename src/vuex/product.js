import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

let store=new  Vuex.Store({
    state:{
        products:[],
        categories:[]
    },
    mutations:{
        SET_CATEGORIES_TO_STATE: (state, categories)=>{
            state.categories=categories;
        }
    },
    actions:{
        GET_CATEGORIES_FROM_API ({commit}){
            return axios ('https://frontend-test.idaproject.com/api/product-category',{
                method: "GET"
            })
                .then((categories)=>{
                    commit('SET_CATEGORIES_TO_STATE', categories.data);
                    return categories
                })
                .catch ((error)=> {
                console.log(error)
                    return error;
            })
        }
    },
    getters:{
        CATEGORIES(state){
            return state.categories
        }
    }
})
 export default store;
