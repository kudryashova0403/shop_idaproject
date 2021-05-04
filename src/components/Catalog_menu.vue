<template>
    <div class="catalog_all">
        <div class="catalog_menu">
            <p v-for="category in CATEGORIES"
               :key="category.id"
               :category="category"
            >
                {{category.name}}
            </p>
        </div>
        <div class="catalog_item">
            <div class="item"></div>
            <Catalog_item v-for="product in products_2"
                          :key="product.id"
                          v-bind:product="product"
                          @sendId="showId"
            />
        </div>
    </div>
</template>

<script>
    import Catalog_item from "./Catalog_item";
    import Header from "./Header";
    import Catalog from "./Catalog";
    import {mapActions, mapGetters} from  'vuex'
    import httpClient from '@/vuex/product.js'
    export default {
        name: "Catalog_menu",
        components: {Catalog, Header, Catalog_item},
        props: ['product'],
        methods: {
            ...mapActions([
                'GET_CATEGORIES_FROM_API'
            ]),
            showId(data) {
                console.log(data)
            },
        },
        data() {
            return {
                products_1:[],
                products_2:[],
                products_3:[],
                // all_products:[...products_1,...products_2,...products_3]
            }
        },
        mounted() {
            this.GET_CATEGORIES_FROM_API()
                httpClient
                    .get('/product?category=1')
                    .then(response=>this.products_1=response.data)
                    .catch(error=>{
                        console.log(error)
                        this.errored=true
                    })
            httpClient
                .get('/product?category=2')
                .then(response=>this.products_2=response.data)
                .catch(error=>{
                    console.log(error)
                    this.errored=true
                })
            httpClient
                .get('/product?category=3')
                .then(response=>this.products_3=response.data)
                .catch(error=>{
                    console.log(error)
                    this.errored=true
                })
            },
        computed:{
            ...mapGetters ([
                'CATEGORIES'
            ]),
            // concatArray(){
            //   return [...data.products_1, ...data.products_2, ...data.products_3]
            // }
        }
    }
</script>

<style scoped>
    .catalog_all {
        display: flex;
        margin-left: 100px;
    }

    .catalog_menu {
        width: 160px;
    }

    .catalog_item {
        display: flex;
        flex-wrap: wrap;
        margin-left: 100px;
    }
</style>
