<template>
    <div id="app">
        <Header/>
        <Catalog/>
        <router-view/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Catalog from "./components/Catalog";

    export default {
        name: "app",
        components: {Catalog, Header}
    }
</script>


<style>
    #app {
        font-family: PT Sans, sans-serif;
        background: #FFFFFF;
        width: 1440px;
    }
</style>
