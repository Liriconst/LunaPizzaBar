<template>
    <div class="menu-elem">

        <img class="menu-elem-img" :src="img" :alt="name" />

        <div class="menu-elem-inner">
            <div class="menu-elem-title">
                {{ name }}
            </div>

            <div v-if="sizes.length === 0" class="menu-elem-price">
                {{ price }} руб. &mdash; {{ mass }} гр.
            </div>

            <div v-else class="menu-elem-sizes">
                <div v-for="size in sizes" :key="name + size.name" class="menu-elem-size">
                    <p>{{ size.name }}</p>
                    <p>{{ size.price }} руб.</p>
                </div>
            </div>

            <div class="menu-elem-desc">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuElem",
        props: {
            name: {
                type: String,
                default: "",
                required: true
            },
            price: {
                type: [Number, String],
                default: 0,
                required: true
            },
            mass: {
                type: [Number, String],
                default: 0
            },
            img: {
                type: String,
                default: "",
                required: true
            },
            sizes: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

    .menu-elem {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 20px rgba(0, 0, 0, .03);
        border: 1px solid #f2f2f2;
        width: 100%;
    }

    .menu-elem-img {
        width: 100%;
        height: auto;
    }

    .menu-elem-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        font-size: 14px;
        font-family: 'Roboto Slab',serif;
    }

    .menu-elem-title, .menu-elem-price {
        font-weight: bold;
        color: black;
    }

    .menu-elem-price, .menu-elem-sizes, .menu-elem-desc {
        margin-top: 20px;
    }

    .menu-elem-sizes {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .menu-elem-sizes p:nth-child(2) {
        margin-top: 10px;
        font-weight: bold;
    }

    .menu-elem-desc {
        text-align: center;
        color: #333;
    }

    @media (min-width: 1201px) {
        .menu-elem {
            max-width: 358px;
        }
    }

</style>