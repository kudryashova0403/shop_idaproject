<template>
    <div class="modal">
        <div class="cart_container">
            <div class="header_cart">
                <div class="cart_title">Корзина</div>
                <div class="cart_close" @click="closeProducts">
                    <img src='../assets/close.svg'>
                </div>
            </div>
            <div class="empty" v-if="!cartProduct.length">
                Пока что вы ничего не добавили
                в корзину.
                <input type="submit" @click="closeProducts" class="sendProduct" value="Перейти к выбору">
            </div>
            <div class="content_cart" v-if="cartProduct.length">
                <div class="product_title">Товары в корзине</div>
                <div class="product_in_cart">
                    <Product_cart v-for="cart in cartProduct":key="cart.index">
                        <div class="product_container">
                            <div class="product_img">
                                <img :src="('https://frontend-test.idaproject.com'+cart.photo)" width="100px">
                            </div>
                            <div class="aboutProduct">
                                {{cart.name}}
                                <p>{{cart.price}}</p>
                                <p class="star_product"><img src="../assets/star.svg">4.5</p>
                            </div>
                            <div class="delete_product"><img @click="deleteProductCart" src="../assets/trash.svg"></div>
                        </div>
                        </Product_cart>
                </div>
            </div>
            <div class="request" v-if="cartProduct.length">
                <div class="request_title">Оформить заказ</div>
                <input class="form" placeholder="Ваше имя" type="text">
                <input class="form" placeholder="Телефон" type="tel" pattern="+7[0-9]{3}-[0-9]{2}-[0-9]{2}">
                <input class="form" placeholder="Адрес" type="text">
                <input class="sendProduct" type="submit" value="Отправить">
            </div>
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
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            closeProducts() {
                this.$emit('closeCart')
            },
            deleteProductCart() {
                this.$emit('deleteProductCart',this.cartProduct)
            }
        }
    }
</script>

<style scoped>
    .modal{
    }

    .cart_container {
        position: absolute;
        width: 460px;
        right: 0%;
        top: 0px;
        background: #FFFFFF;
        box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px 0px 0px 8px;
        padding: 50px 0px 50px 50px;
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
        padding-right: 80px;
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
    .request{
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        font-size: 18px;
        color: #59606D;
    }
    .form{
        width: 350px;
        height: 50px;
        margin-top: 16px;
        background: #F8F8F8;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        color: #1F1F1F;
        padding-left: 14px;
    }
    .form::placeholder{
        font-size: 16px;
        color: #959DAD;
    }
    .sendProduct{
        margin-top: 16px;
        width: 364px;
        height: 50px;
        background: #1F1F1F;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 16px;
        cursor: pointer;
    }
    .sendProduct:hover{
        background: #59606D;
    }
    .empty{
        width: 364px;
        font-size: 22px;
        line-height: 28px;
        color: #000000;
        padding-top: 24px;
    }
</style>
