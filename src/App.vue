<script setup lang="ts">
</script>

<template>
  <div class="container">
    <header class="header">
      <img 
        class="logo"
        src="./assets/logo.webp" alt="">
      <input type="text" name="" id="" class="search">
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
  height: 164.86px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: start;
  justify-content:space-between;
  padding-left: 41.58px;
  padding-right: 69.23px;
}
.logo {
  position: relative;
  width: 545px;
  height: 105px;
  top: 31.88px;
}
.search {
  position: relative;
  top: 47.48px;
  width: 892px;
  height: 55px;
  border: 2px solid #000000;
  opacity: 1;
  font-size: calc(25 / 16 * 1rem);
}
.header p {
  font-family: 'Danjo-bold-Regular';
  position: relative;
  top: 60px;
  letter-spacing: -0.95px;
  color: #000000;
  opacity: 1;
  font-size: calc(25 / 16 * 1rem);
}
.top-btn {
  font-family: 'Copperplate';
  width: 173px;
  height: 60px;
  background-color: #FF671E;
  position: fixed;
  bottom: 92px;
  right: 32px;
  font-size: calc(27 / 16 * 1rem);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border: 0;
}
.navbar {
  width: 100%;
  height: 73px;
  background-color: #6BFF00;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Copperplate';
}
.navbar-arrow {
  font-size: 50px;
  margin-right: 10px;
}
.navbar-text {
  font-size: 30px;
  position: relative;
  bottom: 10px;
}
</style>
