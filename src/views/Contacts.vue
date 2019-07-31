<template>
    <div class="container contacts">
        <div class="contacts-img">
            <p>Контакты</p>
        </div>
        <div class="contacts-time">
            <div class="contacts-time-info">
                <div class="contacts-time-info-1">
                    <p>Время Работы</p>
                </div>
                <div class="contacts-time-info-2">
                    <p>C Воскресенья по Четверг</p>
                </div>
                <div class="contacts-time-info-3">
                    <p>11:00 - 01:00</p>
                </div>
                <div class="contacts-time-info-2">
                    <p>Пятница, Суббота и Праздники</p>
                </div>
                <div class="contacts-time-info-3">
                    <p>11:00 - 02:00</p>
                </div>
            </div>
            <div class="contacts-time-img">
                <img class="contacts-time-img-add" src="/static/img/hall.jpg">
            </div>
        </div>
        <div class="contacts-time-2">
            <div class="contacts-info-1-add">
                <p>Время Работы</p>
            </div>
            <div class="contacts-img-2">
                <img class="contacts-img-2-logo" src="/static/img/hall.png">
            </div>
            <div class="contacts-time-info-2">
                <p>C Воскресенья по Четверг</p>
            </div>
            <div class="contacts-time-info-3">
                <p>11:00 - 01:00</p>
            </div>
            <div class="contacts-time-info-2">
                <p>Пятница, Суббота и Праздники</p>
            </div>
            <div class="contacts-time-info-3">
                <p>11:00 - 02:00</p>
            </div>
            <span class="span7"></span>
            <span class="span8"></span>
        </div>
        <div class="contacts-address">
            <div id="ymap"></div>
            <div class="address-information">
                <div class="address-info-1">
                    <p>Адрес</p>
                </div>
                <div class="address-info-2">
                    <p>г. Сосновый Бор, ул. Молодежная 48А</p>
                </div>
                <span class="span2"></span>
                <div class="address-info-1">
                    <p>Телефоны</p>
                </div>
                <div class="address-info-2">
                    <p>2-88-55</p>
                </div>
                <div class="address-info-2">
                    <p>+7 (921) 920-00-25</p>
                </div>
                <div class="address-info-2">
                    <p>+7 (911) 006-00-25</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contacts {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .contacts-img-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .contacts-img-2-logo {
        position: relative;
        width: 100%;
    }

    .contacts-info-1-add {
        font-family: 'Roboto Slab';
        font-size: 36px;
        color: black;
        padding: 20px 0 10px 0;
        margin-top: 40px;
        width: 95%;
        border-top: 1px solid #4abbd5;
    }

    .span7 {
        margin-top: 20px;
        width: 95%;
        border-bottom: 1px solid #4abbd5;
    }

    .span8 {
        margin-top: 40px;
    }

    .contacts-time-2 {
        display: none;
    }

    .contacts-img {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(/static/img/contacts2.png);
        background-size: cover;
        background-position: 50% 50%;
        box-shadow:0 0 0 268px rgba(0, 0, 0, 0.33) inset;
        font-family: 'Roboto Slab';
        font-size: 36px;
        color: white;
        height: 268px;
        width: 100%;
    }

    .contacts-time {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 57vh;
        width: 100%;
    }

    .contacts-time-info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
    }

    .contacts-time-info-1 {
        font-family: 'Roboto Slab';
        font-size: 20px;
        color: black;
        padding: 10px 0 10px 0;
    }

    .contacts-time-info-2 {
        font-family: 'Roboto Slab Bold';
        font-size: 16px;
        color: black;
        padding: 10px 0 10px 0;
    }

    .contacts-time-info-3 {
        font-family: 'Roboto Slab';
        font-size: 14px;
        color: black;
        padding: 10px 0 10px 0;
    }

    .contacts-time-img {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .contacts-time-img-add {
        max-height: 90%;
    }
    .contacts-address {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 100%;
        height: 50vh;
    }

    .address-information {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: white;
        border-radius: 10px;
        margin-left: 5%;
        height: 40vh;
        width: 40%;
    }

    .address-info-1 {
        font-family: 'Roboto Slab Bold';
        font-size: 16px;
        color: black;
        padding: 10px 0;
    }

    .address-info-2 {
        font-family: 'Roboto Slab';
        font-size: 14px;
        color: black;
        padding: 10px 0;
    }

    #ymap {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    @media(max-width: 1000px) {
        .contacts-time {
            display: none;
        }

        .contacts-time-2 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }
    }
</style>

<script>
    export default {
        mounted() {
            // На будущее
            if (typeof window.__PRERENDER_INJECTED !== "undefined") {
                return;
            }
            const script = document.createElement("script");
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac9e5ad80f3585a671a1cf6e750f33a5e377b1026d84aff3d8c44bd9661bd7365&amp;lang=ru_RU&amp;scroll=true";
            document.querySelector("#ymap").appendChild(script);
        },
    }
</script>