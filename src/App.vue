<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const onClickLogo = () => {
  router.push({ name: 'home', })
}

const onClickTopBtn = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const onClickCharacter = () => {
  router.push({ name: 'character', })
}
</script>

<template>
  <div class="container">
    <header class="header">
      <img 
        class="logo"
        src="./assets/logo.webp" alt=""
        v-on:click="onClickLogo"
      >
      <div class="search">
        <img class="search-icon" src="./assets/search_icon.webp">
        <input type="text" name="" id="" class="search-input">
      </div>
      <p>인물</p>
      <p>카테고리</p>
    </header>

    <router-view/>

    <button
      class="top-btn"
      v-on:click="onClickTopBtn"
    >
      ↑ TOP ↑
    </button>
    <nav class="navbar">
      <div>
        <span class="navbar-arrow">⇢</span>
        <span class="navbar-text">HOME</span>
      </div>
      <div v-on:click="onClickCharacter">
        <span class="navbar-arrow">⇢</span>
        <span class="navbar-text">CHARACTER</span>
      </div>
      <div>
        <span class="navbar-arrow">⇢</span>
        <span class="navbar-text">CATEGORY</span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.container {
  width: inherit;
  background-color: white;
}
.header {
  height: calc(165 / 1920 * 100vw);
  width: 100%;
  box-sizing: border-box;
  padding-left: calc(46 / 1920 * 100vw);
}
.logo {
  display: inline-block;
  width: calc(655 / 1920 * 100vw);
  height: calc(155 / 1920 * 100vw);
  margin-right: calc(51 / 1920 * 100vw);
  margin-top: calc(10 / 1920 * 100vw);
}
.search {
  display: inline-block;
  position: relative;
  width: calc(890 / 1920 * 100vw);
  height: calc(55/1920*100vw);
  border: calc(2 / 1920 * 100vw) solid #000000;
  opacity: 1;
  margin-top: calc(60 / 1920 * 100vw);
  margin-right: calc(20 / 1920 * 100vw);
  vertical-align: top;
}
.search-icon {
  height: calc(40 / 1920 * 100vw);
  width: calc(40 / 1920 * 100vw);
  position: absolute;
  top: calc(4 / 1920 * 100vw);
  left: calc(8 / 1920 * 100vw);
}
.search-input {
  height: calc(28 / 1920 * 100vw);
  position: absolute;
  top: calc(5 / 1920 * 100vw);
  left: calc(50 / 1920 * 100vw);
  font-size: calc(32 / 1920 * 100vw);
  border: none; /* 테두리 없애기 */
  outline: none; /* 클릭 시 하이라이트 없애기 */
  width: calc(780 / 1920 * 100vw);
}
.header p {
  display: inline-block;
  font-family: 'Danjo-bold-Regular';
  letter-spacing: -0.95px;
  color: #000000;
  opacity: 1;
  font-size: calc(25 / 1920 * 100vw);
  vertical-align: top;
  margin-top: calc(73 / 1920 * 100vw);
  margin-left: calc(30 / 1920 * 100vw);
}
.top-btn {
  font-family: 'Copperplate';
  width: calc(173 / 1920 * 100vw);
  height: calc(60 / 1920 * 100vw);
  background-color: #FF671E;
  position: fixed;
  bottom: calc(92 / 1920 * 100vw);
  right: calc(32 / 1920 * 100vw);
  font-size: calc(27 / 1920 * 100vw);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border: 0;
}
.navbar {
  width: 100%;
  /* height: 73px; */
  height: calc(73 / 1920 * 100vw);
  background-color: #6BFF00;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Copperplate';
}
.navbar-arrow {
  /* font-size: 50px; */
  font-size: calc(50 / 1920 * 100vw);
  /* margin-right: 10px; */
  margin-right: calc(10 / 1920 * 100vw);
}
.navbar-text {
  /* font-size: 30px; */
  font-size: calc(30 / 1920 * 100vw);
  position: relative;
  /* bottom: 10px; */
  bottom: calc(10 / 1920 * 100vw);
}
</style>
