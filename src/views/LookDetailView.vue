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
  padding-left: 104px;
  padding-bottom: 100px;
}
.look-info-container {
  margin-bottom: 60px;
}
.full-image-box {
  width: 587px;
  height: 739px;
  background-color: grey;
  display: inline-block;
  vertical-align: top;
}
.part-image-box {
  width: 390px;
  height: 739px;
  background-color: red;
  display: inline-block;
  vertical-align: top;
  margin-left: 12.8px;
}
.informations-box {
  width: 659px;
  height: 866px;
  background-color: blue;
  display: inline-block;
  vertical-align: top;
  margin-left: 58.46px;
}
.collection-container {
  margin-bottom: 70px;
}
.collection-title {
  font-family: 'Danjo-bold-Regular';
  font-size: 25px;
}
.collection-flex {
  height: 485px;
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  gap: 98.32px;
  overflow: scroll;
}
.collection-image {
  width: 405px;
  height: 485px;
  background-color: grey;
  flex-shrink: 0;
}
</style>
