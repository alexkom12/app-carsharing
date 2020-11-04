<template>
  <body>
    <div class="main">
      <header>
        <div class="logo">Need for drive</div>
        <div class="location">
          <img src="../assets/img/icon-map.svg" alt="" />
          <p class="location__city">Ульяновск</p>
        </div>
      </header>
      <div class="sideBar">
        <div class="sideBar__burger">
          <span class="sideBar__span"></span>
        </div>
        <div class="sideBar__lang">Eng</div>
      </div>
      <div class="offer">
        <h1 class="offer__h1">Каршеринг <br /><span>Need for drive</span></h1>
        <h2 class="offer__h2">Поминутная аренда авто твоего города</h2>
        <button class="btn">Забронировать</button>
      </div>
      <footer>
        <div class="footer__reserved">© 2016-2019 «Need for drive»</div>
        <a href="tel: +74952342244" class="footer__phone">8 (495) 234-22-44</a>
      </footer>
    </div>
    <Slider />
    <div class="menu">
      <span class="menu__span"></span>
      <div class="menu__btn">
        <button class="btn__item">ПАРКОВКА</button>
        <button class="btn__item">СТРАХОВКА</button>
        <button class="btn__item">БЕНЗИН</button>
        <button class="btn__item">ОБСЛУЖИВАНИЕ</button>
        <div class="social">
          <img
            src="../assets/img/Telegram_white.svg"
            alt=""
            class="social__img"
          />
          <img
            src="../assets/img/Facebook_white.svg"
            alt=""
            class="social__img"
          />
          <img
            src="../assets/img/Instagram_white.svg"
            alt=""
            class="social__img"
          />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  name: "mainPage",
  components: {
    Slider
  },
  data: () => ({
    model: 0,
    items: [
      { src: "@/assets/img/slide-1.png" },
      { src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg" }
    ]
  })
};
</script>

<style lang="sass">
.v-image__image, .v-image__image--cover
  height: 100vh
/*  padding: 0*/
/*.v-responsive__sizer*/
/*  padding: 0*/
body
  display: flex
  height: 100vh
  font-size: 13px
  +fw-400
  font-weight: 400
  .btn
    width: 250px
    height: 48px
    font-size: 18px
    border-radius: 8px
    +fw-500
    font-weight: 500
    color: $text-white
  .main
    display: flex
    flex-direction: column
    justify-content: space-between
    width: 52%
    margin-left: 64px
    padding: 32px 64px 32px 64px
    header
      display: flex
      justify-content: space-between
      .logo
        color: $text-green
        font-size: 30px
        font-weight: 700
      .location
        display: flex
        color: $text-gray
        font-size: 14px
        .location__city
          margin: auto
          margin-left: 8px
          +fw-400
          font-weight: 400
    .offer
      display: block
      margin: auto
      .offer__h1
        font-size: 70px
        +fw-400

        color: $text-black
        span
          color: $text-green
      .offer__h2
        margin: 34px 0 60px 0
        font-size: 26px
        +fw-300
        font-weight: 300
        color: $text-gray
      .btn
        background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)
    footer
      display: flex
      justify-content: space-between
      .footer__reserved
        color: $text-gray
      .footer__phone
        color: $text-black

    .sideBar
      display: flex
      flex-direction: column
      justify-content: space-between
      position: absolute
      left: 0
      top: 0
      background-color: #151B1F
      width: 64px
      height: 100vh
      padding: 16px
      .sideBar__burger
        display: block
        height: 32px
        width: 32px
        position: relative
        .sideBar__span
          background-color: $text-white
          width: 24px
          height: 3px
          color: #0EC261
          border-radius: 5px
          position: absolute
          left: 4px
          top: 50%
          transform: translate(0, -50%)
        .sideBar__span:before, .sideBar__span:after
          content: ""
          height: 3px
          width: 100%
          position: absolute
          background-color: $text-white
          border-radius: 5px
        .sideBar__span:before
          margin-top: 35%
        .sideBar__span:after
          margin-top: -35%
      .sideBar__lang
        color: $text-green
        text-align: center
        +fw-700
        font-weight: 700

  .slider
    display: block
    width: 48%


  .menu
    display: none
    position: absolute
    background: #111518
    width: 52%
    height: 100vh
    flex-direction: column
    justify-content: center
    .menu__btn
      display: flex
      flex-direction: column
      justify-content: center
      color: $text-white
      font-size: 32px
      margin: 0 auto 0 15%
      +fw-500
      font-weight: 500
      .btn__item
        padding: 6px 0 6px 0
        margin: 6px 0 6px 0
        text-align: left
      .btn__item:hover
        color: $text-green
        transition: 0.4s
</style>
