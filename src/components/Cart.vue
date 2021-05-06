<template>
    <div class="cart">
        <div class="cart_container">
            <div class="header_cart">
                <div class="cart_title">Корзина</div>
                <div class="cart_close" @click="closeProducts">
                    <img src='../assets/close.svg'>
                </div>
            </div>
            <div class="content_cart">
                <div class="product_title">Товары в корзине</div>
                <div class="product_in_cart">
                    <Product_cart v-for="cart in cartProduct">
                        <div class="product_container">
                            <div class="product_img">
                                <img :src="('https://frontend-test.idaproject.com'+cart.photo)" width="100px">
                            </div>
                            <div class="aboutProduct">
                                {{cart.name}}
                                <p>{{cart.price}}</p>
                                <p class="star_product"><img src="../assets/star.svg">4.5</p>
                            </div>
                            <div class="delete_product"><img @click="deleteProduct" src="../assets/trash.svg"></div>
                        </div>
                        </Product_cart>
                </div>
            </div>
            <div class="request"></div>
        </div>
    </div>
</template>

<script>
    import Product_cart from "./Product_cart";

    export default {
        name: "Cart",
        components: {Product_cart},
        props: {
            cartProduct: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            closeProducts() {
                this.$emit('closeCart')
            },
            deleteProduct() {
                this.$emit('deleteProductCart')
            }
        }
    }
</script>

<style scoped>
    .cart {
        background: rgba(255, 255, 255, 1);
        overflow: auto;
    }

    .cart_container {
        position: fixed;
        width: 460px;
        left: 980px;
        top: 0px;
        background: #FFFFFF;
        box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px 0px 0px 8px;
        padding: 50px;
        overflow: auto;
    }

    .header_cart {
        display: flex;
        justify-content: space-between;
    }

    .cart_title {
        font-weight: bold;
        font-size: 32px;
        color: #000000;
    }

    .cart_close {
        padding-top: 5px;
        cursor: pointer;
    }

    .product_title {
        margin-top: 20px;
        font-size: 18px;
        line-height: 23px;
        color: #59606D;
    }

    .product_in_cart {
        display: flex;
        flex-wrap: wrap;
    }
</style>
