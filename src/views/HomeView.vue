<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const onClickLookItem = (lookItem: any) => {
  console.log('onClickLookItem', 'lookItem', lookItem)
  router.push({
    name: 'look-detail',
    query: {
      ...route.query,
      // ...query,
    },
  })
}
</script>

<template>
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
        LATEST Look{{ item }} <span>+</span>
      </h1>
      <p class="look-items-description">최신 룩</p>
      <div class="look-grid-container">
        <div
          class="look-grid-item"
          v-for="(item, index) in [0,1,2,3,4,5,6,7,8,9]"
          v-bind:key="index"
          v-on:click="onClickLookItem(item)"
        >
          <div src="" alt="" class="look-image"></div>
          <p class="person-name">다니엘</p>
          <p class="brand-names">샤넬,샤넬,샤넬,샤넬,샤넬</p>
        </div>
      </div>
      <p class="look-items-arrow">↓</p>
    </div>
  </div>
</template>

<style scoped>
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
  font-family: 'Copperplate';
  margin: 0;
  font-size: calc(27 / 16 * 1rem);
}
.look-items-title span {
  font-family: 'Danjo-bold-Regular'; 
}
.look-items-description {
  font-family: 'Danjo-bold-Regular';
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
.person-name, .brand-names {
  font-family: 'Danjo-bold-Regular';
}
.look-items-arrow {
  margin-left: auto;
  margin-right: auto;
  font-size: 80px;
  width: fit-content;
}
</style>
