<template>
    <div id="app">
        <Header/>
        <Catalog/>
        <Catalog_menu/>
        <router-view/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Catalog from "./components/Catalog";
    import Catalog_menu from "./components/Catalog_menu";

    export default {
        name: "app",
        components: {Catalog_menu, Catalog, Header}
    }
</script>


<style>
    #app {
        font-family: PT Sans, sans-serif;
        background: #FFFFFF;
        width: 1440px;
    }
</style>
