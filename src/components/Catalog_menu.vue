<template>
    <div class="shop">
        <Header/>
        <Catalog/>
        <div class="catalog_all">
            <div class="catalog_menu">
                <p id="change_category" v-for="category in categories"
                   :key="category.id"
                   :category="category"
                   @click="selectCategories(category.id)"
                >
                    {{category.name}}
                </p>
            </div>
            <div class="catalog_item">
                <Catalog_item
                        v-for="product in allProduct"
                        :key="product.id"
                        v-bind:product="product"
                        @sendId="showId"
                />
            </div>
        </div>
    </div>

</template>

<script>
    import Catalog_item from "./Catalog_item";
    import Header from "./Header";
    import Catalog from "./Catalog";
    import {mapActions, mapGetters} from 'vuex'
    import httpClient from '@/vuex/product.js'

    export default {
        name: "Catalog_menu",
        components: {Catalog, Header, Catalog_item},
        props: ['product'],
        data() {
            return {
                categories: [],
                products_1: [],
                products_2: [],
                products_3: [],
                allProduct: [],
                number:[]
            }
        },
        methods: {
            ...mapActions([
                'GET_CATEGORIES_FROM_API'
            ]),
            showId(data) {
                console.log(data)
            },
            selectCategories: function (id) {
                if (id === 1) {
                    this.allProduct = this.products_1
                }
                if (id === 2) {
                    this.allProduct = this.products_2
                }
                if (id === 3) {
                    this.allProduct = this.products_3
                }
            },
        },
        mounted() {
            this.GET_CATEGORIES_FROM_API()
            httpClient
                .get('/product-category')
                .then(response => this.categories = response.data)
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
            httpClient
                .get('/product?category=1')
                .then(response => this.products_1 = response.data)
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
            httpClient
                .get('/product?category=2')
                .then(response => this.products_2 = response.data)
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
            httpClient
                .get('/product?category=3')
                .then(response => this.products_3 = response.data)
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
        },
        computed: {
            ...mapGetters([
                'CATEGORIES'
            ]),
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
        cursor: pointer;
        font-size: 16px;
        color: #959DAD;
    }

    .catalog_item {
        display: flex;
        flex-wrap: wrap;
        margin-left: 100px;
    }

    #change_category:hover {
        text-decoration-line: underline;
        color: #1F1F1F
    }
</style>
