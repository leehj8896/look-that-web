<script setup lang="ts">
</script>

<template>
  <div class="detail-container">
    <div class="look-info-container">
      <div class="full-image-box">
      </div>
      <div class="part-image-box">
      </div>
      <div class="informations-box">
      </div>
    </div>
    <div
      class="collection-container"
      v-for="(item, index) in [1,2,3]" :key="index"
    >
      <p class="collection-title">[[test1]]</p>
      <div class="collection-flex">
        <div
          class="collection-image"
          v-for="(item1, index1) in [1,2,3,4,5,6,7,8,9]" :key="index1"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  padding-left: calc(104/1920*100vw);
  padding-bottom: calc(100/1920*100vw);
}
.look-info-container {
  margin-bottom: calc(60/1920*100vw);
}
.full-image-box {
  width: calc(587 / 1920 * 100vw);
  height: calc(739 / 1920 * 100vw);
  background-color: grey;
  display: inline-block;
  vertical-align: top;
}
.part-image-box {
  width: calc(390 / 1920 * 100vw);
  height: calc(739 / 1920 * 100vw);
  background-color: red;
  display: inline-block;
  vertical-align: top;
  margin-left: calc(12.8 / 1920 * 100vw);
}
.informations-box {
  width: calc(659/1920*100vw);
  height: calc(866/1920*100vw);
  background-color: blue;
  display: inline-block;
  vertical-align: top;
  margin-left: calc(58/1920*100vw);
}
.collection-container {
  margin-bottom: calc(70/1920*100vw);
}
.collection-title {
  font-family: 'Danjo-bold-Regular';
  font-size: calc(25/1920*100vw);
}
.collection-flex {
  height: calc(485/1920*100vw);
  margin-top: calc(65/1920*100vw);
  display: flex;
  flex-direction: row;
  gap: calc(98/1920*100vw);
  overflow: scroll;
}
.collection-image {
  width: calc(405/1920*100vw);
  height: calc(485/1920*100vw);
  background-color: grey;
  flex-shrink: 0;
}
</style>
