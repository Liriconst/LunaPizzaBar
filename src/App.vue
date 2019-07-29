<template>
  <div id="app">
    <div class="header">
      <div class="logo-data">
        <router-link to="/"><img class="logo" src="/static/svg/logo.svg"></router-link>
      </div>
      <span class="span"></span>
      <div class="contact-data">
        <div class="contact-blocks">
          <img class="contact-img" src="/static/svg/geolocation.svg">
          <p>г. Сосновый Бор, ул. Молодежная 48А</p>
        </div>
        <div class="contact-blocks">
          <img class="contact-img" src="/static/svg/telephone.svg">
          <p>2-88-55, +7 (921) 920-00-25, +7 (911) 006-00-25</p>
        </div>
        <div class="contact-blocks2">
          <img class="contact-img" src="/static/svg/information.svg">
          <p>Вс-Чт: с 11:00 до 01:00, Пт-Сб и Праздники: с 11:00 до 02:00</p>
        </div>
        <div class="contact-blocks3">
          <img class="contact-img" src="/static/svg/information.svg">
          <p>Вс-Чт: с 11:00 до 01:00</p>
        </div>
        <div class="contact-blocks3">
          <img class="contact-img" src="/static/svg/information.svg">
          <p>Пт-Сб и Праздники: с 11:00 до 02:00</p>
        </div>
      </div>
      <span class="span3"></span>
      <div class="toolbar">
        <span class="span2"></span>
        <div class="toolbar-blocks">
          <router-link to="/">ГЛАВНАЯ</router-link>
        </div>
        <span class="span2"></span>
        <div class="toolbar-blocks">
          <router-link to="/menu.html">МЕНЮ</router-link>
        </div>
        <span class="span2"></span>
        <div class="toolbar-blocks">
          <router-link to="/pizza.html">ПИЦЦА</router-link>
        </div>
        <span class="span2"></span>
        <div class="toolbar-blocks">
          <router-link to="/contacts.html">КОНТАКТЫ</router-link>
        </div>
        <span class="span2"></span>
      </div>
      <div class="menu">
        <button class="menu-button" @click="expanded = !expanded"  @mouseover="active = true" @mouseleave="active = false"><img alt="" class="menu-img" :src="ChangeSvg"></button>
      </div>
    </div>

    <router-view/>

    <div class="footer">
      <p>Пицца-бар "Луна" © 2019</p>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              expanded: false,
              active: false
          }
      },

      computed: {
        ChangeSvg() {
            return this.expanded || this.active ? "/static/svg/menu.svg" : "/static/svg/menu2.svg";
        }
      }
  }
</script>

<style>
  html, body, #app {
    min-height: 100vh;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  .span {
    border: 0.5px solid #d3d4d6;
    margin: 5px 0;
  }

  .span2 {
    border: 0.5px solid #d3d4d6;
    height: 90%;
  }

  .span3 {
    display: none;
    border: 0.5px solid #d3d4d6;
    height: 90%;
  }

  .menu {
    display: none;
  }

  .menu-img {
    width: 35px;
  }

  .menu-button {
    background: none;
    outline: none;
    border: 0;
  }

  .header {
    display: flex;
    position: fixed;
    flex-direction: row;
    width: 100%;
    background-color: white;
    height: 85px;
    z-index: 9999;
  }

  .contact-data {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    padding-left: 50px;
    font-family: 'Open Sans';
    font-size: 13px;
    color: #2d2e30;
  }

  .contact-img {
    max-height: 1em;
  }

  .contact-blocks {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .contact-blocks2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .contact-blocks2 p {
    padding-left: 15px;
  }

  .contact-blocks3 {
    display: none;
  }

  .contact-blocks p {
    padding-left: 15px;
  }

  .logo-data {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 15%;
    border-bottom: 3px solid #4abbd5;
    margin: 0 5px;
  }

  .logo-data a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 95%;
    position: relative;
  }

  .logo {
    max-height: 95%;
  }

  .toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    padding-right: 100px;
  }

  .toolbar-blocks {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
  }

  .toolbar a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans';
    font-size: 14px;
    color: #2d2e30;
    text-decoration: none;
    height: 100%;
    width: 100%;
    padding: 0 2em;
    transition: .3s;
  }

  .toolbar a:not(.router-link-exact-active):hover {
    background: #4abbd5;
    color: white;
  }

  .toolbar a.router-link-exact-active {
    color: #4abbd5;
  }

  .container {
    display: flex;
    flex: 1 0 auto;
    background-color: white;
    margin-top: 85px;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d2e30;
    height: 40px;
    font-family: 'Roboto Slab';
    font-size: 20px;
    color: white;
  }

  #app {
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  @media (max-width: 1200px) {
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px 0 5px;
      border-bottom: 3px solid #4abbd5;
      width: 5%;
      min-width: 75px;
      max-width: 85px;
    }

    .logo-data {
      width: 25%;
    }

    .toolbar {
      display: none;
    }

    .span2 {
      display: none;
    }

    .span3 {
      display: inline;
    }

    .contact-data {
      position: relative;
      width: 70%;
      padding-left: 3%;
    }

    @media (max-width: 700px) {
      .contact-data {
        font-size: 12px;
        padding-left: 20px;
      }

      .contact-blocks p {
        padding-left: 10px;
      }

      .contact-blocks2 {
        display: none;
      }

      .contact-blocks3 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        width: 100%;
      }

      .contact-blocks3 p {
        padding-left: 10px;
      }

      @media (max-width: 540px) {
        .contact-data {
          font-size: 10px;
          padding-left: 15px;
        }

        .contact-blocks p {
          padding-left: 5px;
        }

        .contact-blocks3 p {
          padding-left: 5px;
        }
      }
    }
  }

  @font-face {
    font-family: 'Roboto Slab Thin';
    src: local('Roboto Slab Thin'), local('RobotoSlab-Thin'),
    url('/static/fonts/robotoslabthin.woff2') format('woff2'),
    url('/static/fonts/robotoslabthin.woff') format('woff'),
    url('/static/fonts/robotoslabthin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Slab Light';
    src: local('Roboto Slab Light'), local('RobotoSlab-Light'),
    url('/static/fonts/robotoslablight.woff2') format('woff2'),
    url('/static/fonts/robotoslablight.woff') format('woff'),
    url('/static/fonts/robotoslablight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Slab';
    src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'),
    url('/static/fonts/robotoslabregular.woff2') format('woff2'),
    url('/static/fonts/robotoslabregular.woff') format('woff'),
    url('/static/fonts/robotoslabregular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Slab Bold';
    src: local('Roboto Slab Bold'), local('RobotoSlab-Bold'),
    url('/static/fonts/robotoslabbold.woff2') format('woff2'),
    url('/static/fonts/robotoslabbold.woff') format('woff'),
    url('/static/fonts/robotoslabbold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Open Sans Light';
    src: local('Open Sans Light'), local('OpenSans-Light'),
    url('/static/fonts/opensanslight.woff2') format('woff2'),
    url('/static/fonts/opensanslight.woff') format('woff'),
    url('/static/fonts/opensanslight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('OpenSans'),
    url('/static/fonts/opensans.woff2') format('woff2'),
    url('/static/fonts/opensans.woff') format('woff'),
    url('/static/fonts/opensans.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Open Sans Italic';
    src: local('Open Sans Italic'), local('OpenSans-Italic'),
    url('/static/fonts/opensansitalic.woff2') format('woff2'),
    url('/static/fonts/opensansitalic.woff') format('woff'),
    url('/static/fonts/opensansitalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Open Sans Bold';
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
    url('/static/fonts/opensansbold.woff2') format('woff2'),
    url('/static/fonts/opensansbold.woff') format('woff'),
    url('/static/fonts/opensansbold.ttf') format('truetype');
  }
</style>