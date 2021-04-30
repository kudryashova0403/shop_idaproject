<template>
    <div class="header">
        <div class="container">
            <div class="test">TestList</div>
            <div class="basket">
                <img src='../assets/basket.svg'>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
    }
.container{
    height: 66px;
    box-shadow:0px 4px 16px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 100px;
    border-radius: 0px 0px 8px 8px;
}
    .test{
        color: #59606D;
        font-weight: bold;
        font-size: 22px;
    }
</style>
