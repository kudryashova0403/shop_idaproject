<template>
    <div class="catalog_all">
        <div class="catalog_menu">
            Рюкзаки
            <p>Футболки</p>
            <p>Рубашки</p>
        </div>
        <div class="catalog_item">
            <Catalog_item v-for="product in products"
            :key="product.id"
            v-bind:product="product"/>
        </div>
    </div>
</template>

<script>
    import Catalog_item from "./Catalog_item";

    export default {
        name: "Catalog_menu",
        components: {Catalog_item},
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
    }
</style>
