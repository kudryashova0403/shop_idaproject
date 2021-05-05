<template>
    <div class="cart">
        <div class="cart_container">
            <div class="header_cart">Корзина</div>
            <div class="content_cart"></div>
            <div class="request"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style scoped>
    .cart{
        background: rgba(255, 255, 255, 1);
    }
.cart_container{
    position: fixed;
    width: 460px;
    height: 1077px;
    left: 980px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
}
</style>
