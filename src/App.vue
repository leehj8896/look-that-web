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
  width: inherit;
  background-color: white;
}
.header {
  height: 164.86px;
  width: inherit;
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
  position: relative;
  top: 60px;
  letter-spacing: -0.95px;
  color: #000000;
  opacity: 1;
  font-size: calc(25 / 16 * 1rem);
}
.main-banner {
  margin-left: 53px;
  margin-right: 42px;
  width: 1826px;
  height: 484px;
  border: 5px solid #000000;
  opacity: 1;
  background-color: grey;
}
.main-contents {
  margin-top: 74.03px;
  /* padding-left: 60.72px; */
  /* padding-right: 43.12px; */
}
.look-items-container {
  margin-left: 61px;
  margin-right: 43px;
  margin-bottom: 98px;
}
.look-items-title {
  margin: 0;
  font-size: calc(27 / 16 * 1rem);
}
.look-items-description {
  font-size: calc(20 / 16 * 1rem);
  margin-bottom: 10.47px;
}
.look-grid-container {
  display: grid;
  column-gap: 74px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.look-grid-item {
  height: calc((365 + 23 + 80)px);
  width: 304px;
  margin-bottom: 23.32px;
}
.look-image {
  background-color: gray;
  height: 365px;
  width: 304px;
  margin-bottom: 28.1px;
}
</style>
