<template>
    <div class="page-img" :style="rootStyles">
        <div class="img-overlay"></div>
        <div class="page-img-title">{{ name }}</div>
        <div class="page-img-desc">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageImg",

        props: {
            name: {
                type: String,
                default: ""
            },
            image: {
                type: String,
                default: ""
            }
        },

        computed: {
            rootStyles() {
                return {
                    "background-image": `url(${ this.image })`
                };
            }
        }
    }
</script>

<style scoped>

    .page-img {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: 50% 50%;
        font-family: 'Roboto Slab';
        color: white;
        height: 268px;
        width: 100%;
    }

    .img-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
    }

    .page-img-title, .page-img-desc {
        position: relative;
    }

    .page-img-title {
        font-size: 36px;
    }

</style>