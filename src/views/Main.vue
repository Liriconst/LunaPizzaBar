<template>
  <div class="container main">
    <div class="main-img">
      <div class="main-text-1">
        <p>ДОБРО ПОЖАЛОВАТЬ В ЛУНУ</p>
      </div>
      <div class="main-text-2">
        <p>Самое уютное, тихое и приятное место в Сосновом Бору</p>
        <p>с хорошей атмосферой и благожелательным обслуживающим персоналом,</p>
        <p>куда приятно зайти впервые и возвращаться снова и снова</p>
      </div>
    </div>
    <div class="main-about">
      <div class="main-about-info">
        <div class="main-about-info-1">
          <p>О Нас</p>
        </div>
        <div class="main-about-info-2">
          <p>Оригинальный интерьер и современный сервис делают наше кафе</p>
        </div>
        <div class="main-about-info-2">
          <p>идеальным местом для проведения вечеринок, банкетов,</p>
        </div>
        <div class="main-about-info-2">
          <p>корпоративных праздников, деловых встреч, романтических свиданий,</p>
        </div>
        <div class="main-about-info-2">
          <p>для празднования небольших семейных торжеств и конечно, свадеб.</p>
        </div>
        <div class="main-about-info-3">
          <router-link to="/contacts.html">Узнать больше</router-link>
        </div>
      </div>
      <div class="contacts-time-img">
        <img class="logo" src="/static/img/hall.jpg">
      </div>
     </div>
    <div class="main-about">
      <div class="pizzas-img">
        <img class="logo" src="/static/img/pizzas.png">
      </div>
      <div class="pizzas-info">
        <div class="pizzas-info-1">
          <p>Пицца</p>
        </div>
        <div class="pizzas-info-2">
          <p>Мы рады предоставить вам огромный ассортимент пицц:</p>
        </div>
        <div class="pizzas-info-2">
          <p>6 вкуснейших пицц на тонком тесте в лучших традициях Италии,</p>
        </div>
        <div class="pizzas-info-2">
          <p>25 сытнейших горячих пицц на пышном тесте.</p>
        </div>
        <div class="pizzas-info-2">
          <p>А также, у нас можно самостоятельно собрать пиццу себе по вкусу!</p>
        </div>
        <div class="main-about-info-3">
          <router-link to="/pizza.html">Выбрать пиццу</router-link>
        </div>
      </div>
    </div>
    <div class="main-about">
      <div class="main-about-info">
        <div class="main-about-info-1">
          <p>Меню</p>
        </div>
        <div class="main-about-info-2">
          <p>Помимо пицц, наше кафе имеет обширный набор различных блюд,</p>
        </div>
        <div class="main-about-info-2">
          <p>как исконно русской, так и европейской кухни.</p>
        </div>
        <div class="main-about-info-2">
          <p>Горчие блюда, различные закуски и дессерты на ваш выбор.</p>
        </div>
        <div class="main-about-info-3">
          <router-link to="/menu.html">Ознакомиться с меню</router-link>
        </div>
      </div>
      <div class="contacts-time-img">
        <img class="logo" src="/static/img/menus.png">
      </div>
    </div>
    <div class="pizzas-info-1">
      <p>О нас</p>
    </div>
    <div class="main-img">
      <img class="main-img-logo" src="/static/img/hall.jpg">
    </div>

  </div>
</template>

<style>

  .main-h1 {

  }

  .main-about-info-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4abbd5;
    height: 2.5em;
    width: 30%;
    margin-top: 15px;
    margin-right: 10%;
    transition: .5s;
  }

  .main-about-info-3 a {
    font-family: 'Roboto Slab';
    font-size: 15px;
    color: #2d2e30;
    text-decoration: unset;
    width: 100%;
    padding: 0 2em;
  }

  .main-about-info-3:hover {
    background: #4abbd5;
    color: white;
  }

  .main-about-info-3 a:hover {
    color: white;
  }

  .main-about-info-3 a.router-link-exact-active {
    color: #4abbd5;
  }

  .main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .main-img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(/static/img/main-hall.png);
    background-size: cover;
    background-position: 50% 50%;
    box-shadow:0 0 0 476px rgba(0, 0, 0, 0.40) inset;
    height: 476px;
    width: 100%;
  }

  .main-text-1 {
    font-family: 'Roboto Slab';
    font-size: 36px;
    color: white;
    padding: 10px 0;
  }

  .main-text-2 {
    font-family: 'Roboto Slab';
    font-size: 14px;
    color: white;
    padding: 5px 0;
    margin: 5px 0;
  }

  .main-about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50vh;
    width: 100%;
  }

  .pizzas-info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
  }

  .pizzas-info-1 {
    font-family: 'Roboto Slab';
    font-size: 36px;
    color: black;
    padding: 10px 0 10px 0;
  }

  .pizzas-info-2 {
    font-family: 'Roboto Slab';
    font-size: 14px;
    color: black;
    padding: 5px 0 0 0;
  }

  .pizzas-img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 75%;
    width: 50%;
    padding-right: 5%;
  }

  .main-about-info {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 50%;
  }

  .main-about-info-1 {
    font-family: 'Roboto Slab';
    font-size: 36px;
    color: black;
    padding: 10px 10% 10px 0;
  }

  .main-about-info-2 {
    font-family: 'Roboto Slab';
    font-size: 14px;
    color: black;
    padding: 5px 10% 0 0;
  }

  .contacts-time-img {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 75%;
    width: 50%;
  }

  .main-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .main-img-logo {
    width: 100%;
  }
</style>