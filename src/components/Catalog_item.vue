<template>
    <div class="item_block">
        <div class="item-container">
            <div class="item_1">
                <div class="star">
                    <img src="../assets/star.svg">
                </div>
                <div class="img_item">
                    <img src="../assets/backpack.jpg">
                </div>
                <div class="buy">
                    <img src="../assets/buy.svg">
                </div>
            </div>
            <div class="item_2">{{product.name}}
            <p class="price">{{product.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Catalog_item",
        props:{
            product:{
                type: Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .item_block {
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        width: 264px;
    }

    .item-container {
        height: 272px;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
    .item_1{
        width: 230px;
        display: flex;
        justify-content: space-between;
    }
    .item_2{
        color: #59606D;
        font-size: 14px;
    }
    .price{
        color: #1F1F1F;
        font-weight: bold
    }
</style>
