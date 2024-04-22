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
    <div class="main-banner">
      banner
    </div>
    <div class="main-contents">
      contents
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  background-color: white;
}
.header {
  height: calc((100vw / 1920) * 164.86);
  display: flex;
  align-items: start;
  justify-content:space-between;
  padding-left: calc((100vw / 1920) * 69.2);
  padding-right: calc((100vw / 1920) * 41.58);
}
.logo {
  position: relative;
  width: calc((100vw / 1920) * 545);
  height: calc((100vw / 1920) * 105);
  top: calc((100vw / 1920) * 31.88);
}
.search {
  position: relative;
  top: calc((100vw / 1920) * 47.48);
  width: calc((100vw / 1920) * 892);
  height: calc((100vw / 1920) * 55);
  border: 2px solid #000000;
  opacity: 1;
  font-size: calc(25rem / 16);
}
.container p {
  position: relative;
  top: calc((100vw / 1920) * 59.71);
  letter-spacing: -0.95px;
  color: #000000;
  opacity: 1;
  font-size: calc(25rem / 16);
}
.main-banner {
  position: relative;
  left: calc((100vw / 1920) * 53);
  width: calc((100vw / 1920) * 1826);
  height: calc((100vw / 1920) * 484);
  border: 5px solid #000000;
  opacity: 1;
  background-color: grey;
}
</style>
