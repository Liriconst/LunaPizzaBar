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
  </div>
</template>

<style>
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
    width: 100vw;
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
</style>