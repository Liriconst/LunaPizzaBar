<template>
    <section class="menu-section">

        <h3 class="menu-section-title">{{ name }}</h3>

        <p class="menu-section-desc">{{ description }}</p>

        <div class="menu-section-body">
            <slot>
                <menu-elem v-for="d in data"
                           :key="name + d.title"
                           :name="d.title"
                           :price="d.price"
                           :img="d.image"
                           :mass="d.mass"
                           :sizes="d.sizes"
                >
                    {{ d.description }}
                </menu-elem>
            </slot>
        </div>

    </section>
</template>

<script>
    export default {
        name: "MenuSection",

        props: {
            name: {
                type: String,
                default: "",
                required: true
            },
            description: {
                type: String,
                default: ""
            },
            data: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

    .menu-section {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .menu-section-title {
        font-family: 'Roboto Slab', serif;
        font-size: 20px;
        line-height: 30px;
        padding: 0 0 20px;
    }

    .menu-section-body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        grid-gap: 30px;
        margin-top: 50px;
    }

    @media (max-width: 1200px) {

        .menu-section-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .menu-section-body > div {
            margin-top: 10px;
        }

        .menu-section-body > div:first-child {
            margin-top: 0;
        }

    }

</style>