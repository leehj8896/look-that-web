<script setup lang="ts">
</script>

<template>
  <div class="container">
    <header class="header">
      <img 
        class="logo"
        src="./assets/logo.webp" alt="">
      <div class="search">
        <img class="search-icon" src="./assets/search_icon.webp">
        <input type="text" name="" id="" class="search-input">
      </div>
      <p>인물</p>
      <p>카테고리</p>
    </header>

    <router-view/>

    <button class="top-btn">↑ TOP ↑</button>
    <nav class="navbar">
      <div>
        <span class="navbar-arrow">→</span>
        <span class="navbar-text">HOME</span>
      </div>
      <div>
        <span class="navbar-arrow">→</span>
        <span class="navbar-text">CHARACTER</span>
      </div>
      <div>
        <span class="navbar-arrow">→</span>
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
  /* height: 164.86px; */
  height: calc(165 / 1920 * 100vw);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: start;
  justify-content:space-between;
  /* padding-left: 41.58px; */
  padding-left: calc(42 / 1920 * 100vw);
  /* padding-right: 69.23px; */
  padding-right: calc(70 / 1920 * 100vw);
}
.logo {
  position: relative;
  /* width: 545px; */
  width: calc(545 / 1920 * 100vw);
  /* height: 105px; */
  height: calc(120 / 1920 * 100vw);
  /* top: 31.88px; */
  top: calc(32 / 1920 * 100vw);
}
.search {
  position: relative;
  /* top: 47.48px; */
  top: calc(47/1920 * 100vw);
  /* width: 892px; */
  width: calc(892 / 1920 * 100vw);
  /* height: 55px; */
  height: calc(55/1920*100vw);
  border: 2px solid #000000;
  opacity: 1;
}
.search-icon {
  height: calc(40 / 1920 * 100vw);
  width: calc(40 / 1920 * 100vw);
  margin-top: calc(6 / 1920 * 100vw);
  margin-left: calc(9 / 1920 * 100vw);
}
.search-input {
  height: 90%;
  position: absolute;
  top: 0;
  font-size: calc(25 / 16 * 1rem);
  border: none; /* 테두리 없애기 */
  outline: none; /* 클릭 시 하이라이트 없애기 */
  width: calc(800 / 1920 * 100vw);
}
.header p {
  font-family: 'Danjo-bold-Regular';
  position: relative;
  /* top: 60px; */
  top: calc(60/1920*100vw);
  letter-spacing: -0.95px;
  color: #000000;
  opacity: 1;
  /* font-size: 25px; */
  font-size: calc(25 / 1920 * 100vw);
}
.top-btn {
  font-family: 'Copperplate';
  /* width: 173px; */
  width: calc(173 / 1920 * 100vw);
  /* height: 60px; */
  height: calc(60 / 1920 * 100vw);
  background-color: #FF671E;
  position: fixed;
  bottom: 92px;
  right: 32px;
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
