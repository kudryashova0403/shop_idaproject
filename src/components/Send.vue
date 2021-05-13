<template>
    <div class="application_sent">
        <div class="img_hand">
            <img src="../assets/hand.svg">
        </div>
        <h1>Заявка успешно отправлена</h1>
        <p>Вскоре наш менеджер свяжется с Вами</p>
    </div>
</template>

<script>
    export default {
        name: "Send"
    }
</script>

<style scoped>
.application_sent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
}
    h1{
        font-weight: bold;
        font-size: 24px;
        margin-bottom: -15px;
    }
    p{
        font-size: 16px;
        color: #59606D;
    }
</style>
