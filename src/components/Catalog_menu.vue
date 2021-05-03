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
            <Catalog_item v-for="product in product"
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
            }
        },
        data() {
            return {
            }
        },
        mounted() {
            this.GET_CATEGORIES_FROM_API()
        },
        computed:{
            ...mapGetters ([
                'CATEGORIES'
            ])
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
