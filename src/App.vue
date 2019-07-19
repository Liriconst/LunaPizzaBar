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
        <div class="contact-blocks">
          <img class="contact-img" src="/static/svg/information.svg">
          <p>Вс-Чт: с 11:00 до 01:00, Пт-Сб и Праздники: с 11:00 до 02:00</p>
        </div>
      </div>
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
    </div>

    <router-view/>

    <div class="footer">
      <p>Пицца-бар "Луна" © 2019</p>
    </div>
  </div>
</template>

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

  .header {
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    height: 85px;
    z-index: 9999;
  }

  .contact-data {
    display: flex;
    justify-content: center;
    align-items: flex-start;
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

  .contact-blocks p {
    padding-left: 15px;
  }

  .logo-data {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    border-bottom: 3px solid #4abbd5;
    margin: 0 5px;
  }

  .logo-data a {
    width: 50%;
    height: 95%;
  }

  .logo {
    max-height: 95%;
  }

  .span2 {
    border: 0.5px solid #d3d4d6;
    height: 90%;
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

