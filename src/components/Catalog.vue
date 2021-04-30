<template>
    <div class="catalog">
        <div class="container">
            <div class="catalog_title">Каталог</div>
            <div class="sort">
                <div class="sort-text">
                    Сортировать по:
                    <button class="sort_button" @click="option=! option">
                        <img id="arrow" src='../assets/vector1.svg'>
                    </button>
                </div>
                <div class="sort_list" v-if="option">
                        <p v-for="(sort,index) in variant" :key="index">{{sort}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "catalog",
        data() {
            return {
                variant: ['По цене', 'По популярности'],
                option: false
            }
        },
        methods: {
            onSubmit() {
                this.option = true;
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
.sort{
    width: 160px;
}
    .sort_list {
        height: 68px;
        left: 1192px;
        top: 135px;
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        font-size: 14px;
        line-height: 18px;
        padding-left: 12px;
    }

</style>
