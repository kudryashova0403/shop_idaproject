<template>
    <div class="product_block">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Product_cart"
    }
</script>

<style scoped>
    .product_block {
        width: 364px;
        height: 120px;
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        margin-top: 12px;
    }

    .product_container {
        display: flex;
        justify-content: space-between;
        padding: 15px 25px;
    }

    .aboutProduct {
        width: 170px;
        height: 36px;
        font-size: 14px;
        line-height: 18px;
        color: #59606D;
    }

    .star_product {
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: #F2C94C;
        height: 20px;
        align-items: center;
    }

    .delete_product {
        display: flex;
        height: 75px;
        cursor: pointer;
        align-items: center;
    }
</style>
