<template>

  <div class="container menu-page">

    <page-img name="Пицца" image="/static/img/pizza.png" />

    <div class="page-inner">

      <menu-section name="Пицца" :data="data.simple" />

      <menu-section name="Пицца на тонком тесте" :data="data.thin" />

      <menu-section name="Пицца на пышном тесте" :data="data.thick" />

      <menu-section class="ingredients-container" name='Пицца "Ваш каприз"'>

        <ul class="ingredients">
          <li>
            <span>Тесто</span><span>355гр</span><span>80.00 руб.</span>
          </li>
          <li>
            <span>Соус для пиццы красный</span><span>50гр</span><span>50.00 руб.</span>
          </li>
          <li>
            <span>Соус для пиццы белый</span><span>50гр</span><span>50.00 руб.</span>
          </li>
          <li>
            <span>Кетчуп</span><span>30гр</span><span>30.00 руб.</span>
          </li>
          <li>
            <span>Ветчина</span><span>100гр</span><span>110.00 руб.</span>
          </li>
          <li>
            <span>Язык говяжий</span><span>50гр</span><span>110.00 руб.</span>
          </li>
          <li>
            <span>Филе куры</span><span>100гр</span><span>130.00 руб.</span>
          </li>
          <li>
            <span>Колбаса с/к.</span><span>100гр</span><span>150.00 руб.</span>
          </li>
          <li>
            <span>Колбаса п/к.</span><span>100гр</span><span>110.00 руб.</span>
          </li>
          <li>
            <span>Креветки</span><span>50гр</span><span>140.00 руб.</span>
          </li>
          <li>
            <span>Шампиньоны</span><span>100гр</span><span>80.00 руб.</span>
          </li>
          <li>
            <span>Томаты свежие</span><span>100гр</span><span>80.00 руб.</span>
          </li>
        </ul>

        <ul class="ingredients">
          <li>
            <span>Перец сежий</span><span>100гр</span><span>90.00 руб.</span>
          </li>
          <li>
            <span>Огурцы маринованные</span><span>50гр</span><span>70.00 руб.</span>
          </li>
          <li>
            <span>Кукуруза</span><span>100гр</span><span>70.00 руб.</span>
          </li>
          <li>
            <span>Зеленый горошек</span><span>100гр</span><span>70.00 руб.</span>
          </li>
          <li>
            <span>Ананас</span><span>100гр</span><span>90.00 руб.</span>
          </li>
          <li>
            <span>Оливки</span><span>30гр</span><span>50.00 руб.</span>
          </li>
          <li>
            <span>Маслины</span><span>30гр</span><span>50.00 руб.</span>
          </li>
          <li>
            <span>Яйцо</span><span>40гр</span><span>30.00 руб.</span>
          </li>
          <li>
            <span>Сыр колбасный</span><span>100гр</span><span>90.00 руб.</span>
          </li>
          <li>
            <span>Сыр Пармезан</span><span>50гр</span><span>100.00 руб.</span>
          </li>
          <li>
            <span>Сыр Тильзитер</span><span>100гр</span><span>100.00 руб.</span>
          </li>
          <li>
            <span>Сыр Моцарелла</span><span>100гр</span><span>100.00 руб.</span>
          </li>
        </ul>

      </menu-section>

    </div>
  </div>

</template>

<script>

  import data from "../data/pizza.json";

  export default {

    data() {
      return {
        data: data
      };
    }

  };

</script>

<style scoped>

  .menu-page {
    flex-direction: column;
  }

  .page-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 100px 0;
  }

  .menu-section {
    margin-top: 100px;
  }

  .menu-section:first-child {
    margin-top: 0;
  }

  .ingredients-container >>> .menu-section-body {
    display: flex;
  }

  .ingredients {
    flex: 1 1 50%;
    font-family: 'Roboto Slab', serif;
  }

  .ingredients li {
    list-style: none;
    display: grid;
    grid-template-columns: 1.3fr 0.7fr 1fr;
    justify-items: center;
    justify-content: space-around;
    margin: 8px 0;
  }

  .ingredients li span:first-child {
    width: 100%;
    text-align: left;
  }

  .ingredients li span:nth-child(3) {
    width: 100px;
    text-align: right;
  }

  @media (max-width: 1200px) {
    .page-inner {
      max-width: 800px;
    }
  }

</style>