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
      <div
        class="look-items-container"
        v-for="(item, index) in [1, 2, 3]"
        v-bind:key="index"
      >
        <h1 class="look-items-title">
          LATEST Look 최신 룩{{ item }} +
        </h1>
        <p class="look-items-description">최신 룩</p>
        <div class="look-grid-container">
          <div
            class="look-grid-item"
            v-for="(item, index) in [0,1,2,3,4,5,6,7,8,9]"
            v-bind:key="index"
          >
            <div src="" alt="" class="look-image"></div>
            <p class="person-name">다니엘</p>
            <p class="brand-names">샤넬,샤넬,샤넬,샤넬,샤넬</p>
          </div>
        </div>
      </div>
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
  font-size: calc(25 / 16 * 1rem);
}
.header p {
  position: relative;
  top: calc((100vw / 1920) * 59.71);
  letter-spacing: -0.95px;
  color: #000000;
  opacity: 1;
  font-size: calc(25 / 16 * 1rem);
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
.main-contents {
  margin-top: calc(74.03 / 1920 * 100vw);
  padding-left: calc(100vw * (60.72 / 1920));
  padding-right: calc(100vw * (43.12 / 1920));
}
.look-items-title {
  margin: 0;
  font-size: calc(27 / 16 * 1rem);
}
.look-items-description {
  font-size: calc(20 / 16 * 1rem);
  margin-bottom: calc(10.47 / 1920 * 100vw);
}
.look-grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.look-grid-item {
  height: calc((365 + 23 + 80) / 1920 * 100vw);
  width: calc(304 / 1920 * 100vw);
  margin-bottom: calc(23.32 / 1920 * 100vw);
}
.look-image {
  background-color: gray;
  height: calc(365 / 1920 * 100vw);
  width: calc(304 / 1920 * 100vw);
  margin-bottom: calc(28.1 / 1920 * 100vw);
}
</style>
