<template>
    <div class="header">
        <Cart class="cart_back" v-if="clickToCart"
              @closeCart="closeCart"
              :cartProduct="cartProduct"
              @deleteProductCart="deleteProductCart"
        >
        </Cart>
        <div class="container_header">
            <div class="test">TestList</div>
            <div class="basket" @click="showProducts">
                <img src='../assets/basket.svg'>
                <span class="amount_products">{{cartProduct.length}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Cart from "./Cart";
    export default {
        name: "Header",
        components: {Cart},
        props:{
            cartProduct:{
            type: Array,
        default(){
                return[]
            }
        }
    },
        data(){
            return{
                clickToCart:false,
                // cartProduct: []
            }
        },
        methods:{
            showProducts(){
                this.clickToCart=true
            },
            closeCart(){
                this.clickToCart=false
            },
            deleteProductCart(index){
                this.$emit('deleteProductCart',index)
            }
        }
    }
</script>

<style scoped>
    .header {
    }

    .container_header {
        height: 66px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 100px;
        border-radius: 0px 0px 8px 8px;
    }

    .test {
        color: #59606D;
        font-weight: bold;
        font-size: 22px;
    }

    .amount_products {
        position: static;
        left:92.36%;
        top: 16px;
        padding: 6px;
        background: #959DAD;
        border-radius: 100%;
        color: #FFFFFF;
        font-size: 8px;
        text-align: center;
    }
    .basket{
        cursor: pointer;
    }
    .cart_back{
        /*background: #c15c5c;*/
        /*opacity: 0.8;*/
    }
</style>
