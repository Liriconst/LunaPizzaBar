<template>

  <div class="container menu-page">

    <page-img name="Меню" image="/static/img/menu.png" />

    <div class="page-inner">

      <menu-section name="Холодные закуски" :data="data.cold" />

      <menu-section name="Салаты" :data="data.salads" />

      <menu-section name="Первые блюда" :data="data.first" />

      <menu-section name="Вторые блюда" :data="data.second" />

      <menu-section name="Гарниры" :data="data.side" />

    </div>

  </div>

</template>

<script>

  import data from "../data/menu.json";

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