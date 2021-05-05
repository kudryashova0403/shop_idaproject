<template>
    <div id="app">
        <Catalog_menu
                @showId="showId"
        />
        <router-view/>
    </div>
</template>

<script>
    import Catalog_menu from "./components/Catalog_menu";

    export default {
        name: "app",
        components: {Catalog_menu},
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
