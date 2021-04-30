<template>
    <div class="catalog">
        <div class="container">
            <div class="catalog_title">Каталог</div>
            <div class="sort">
                <div class="sort-text">
                    Сортировать по: {{sort}}
                    <button class="sort_button" @click="option=! option">
                        <img id="arrow" src='../assets/vector1.svg'>
                    </button>
                </div>
                <div class="sort_list" v-if="option">
                    <p id="change" v-for="(variant,index) in variant" :key="index"
                    v-on:click="select(index)">
                        По {{variant}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const a=['цене', 'популярности']
    export default {
        name: "catalog",
        data() {
            return {
                variant: ['цене', 'популярности'],
                option: false,
                a: a,
                sort: a[0]
            }
        },
        methods: {
            select:function (index) {
                this.sort=a[index]
            }
        }
    }
</script>

<style scoped>
    .container {
        padding: 40px 100px 60px 100px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #1F1F1F;
    }

    .catalog_title {
        color: #1F1F1F;
        font-weight: bold;
        font-size: 32px;
        line-height: 41px;
    }

    #arrow {
        padding-bottom: 3px;
    }

    .sort {
    }

    .sort_list {
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        font-size: 14px;
        line-height: 18px;
        padding-left: 12px;
        padding-bottom: 12px;
        cursor: pointer;
        color: #959DAD;
    }
    #change:hover{
        color: #1F1F1F;
        background: #F8F8F8
    }
    button {
        border: 0;
        border-radius: 0;
        background: #FFFFFF;
        cursor: pointer;
    }

</style>
