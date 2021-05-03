<template>
    <div id="app">
        <Header/>
        <Catalog/>
        <Catalog_menu
                v-bind:product="products"
                @showId="showId"
        />
        <router-view/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Catalog from "./components/Catalog";
    import Catalog_menu from "./components/Catalog_menu";

    export default {
        name: "app",
        components: {Catalog_menu,Header,Catalog},
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 2,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 3,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 4,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 5,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 6,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 7,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 8,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 9,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 10,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 11,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    },
                    {
                        id: 12,
                        name: 'Рюкзак Louis Vuitton Discovery',
                        price: '150 000 ₽'
                    }
                ]
            }
        },
        methods:{
           showId(data){
               console.log(data)
           }
        }
    }
</script>


<style>
    #app {
        font-family: PT Sans, sans-serif;
        background: #FFFFFF;
        width: 1440px;
    }
</style>
