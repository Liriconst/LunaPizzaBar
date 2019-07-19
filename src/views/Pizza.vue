<template>

  <div class="container menu-page">

    <page-img name="Пиццы" image="/static/img/pizza.png" />

    <div class="page-inner">

      <menu-section name="Пицца" :data="data.simple" />

      <menu-section name="Пицца на тонком тесте" :data="data.thin" />

      <menu-section name="Пицца на пышном тесте" :data="data.thick" />

      <menu-section name='Пицца "Ваш каприз"'>

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

  @media (max-width: 1200px) {
    .page-inner {
      max-width: 800px;
    }
  }

</style>