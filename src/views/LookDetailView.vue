<script setup lang="ts">
import { constants } from '@/constants';
import { urls } from '@/urls';
import { fetchData } from '@/utils';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const lookId = route.params.lookId

const lookDetail = ref()
const fullImageUrl = ref()
const partImageList = ref()
const itemInfoList = ref()
const collectionList = ref()

const setLookDetailData = async () => {
  const lookDetailData = await fetchData({
    path: `${urls.lookDetail}/${lookId}`,
  })
  lookDetail.value = lookDetailData
  fullImageUrl.value = `${constants.API_URL}${lookDetailData.lookList[0].imageUrlList[0]}`
  partImageList.value = lookDetailData.lookList[0].itemList.map((partItem: any) => {
    return `${constants.API_URL}${partItem.item.imageUrl}`
  })
  itemInfoList.value = lookDetailData.lookList[0].itemList.map((partItem: any) => {
    return {
      title: partItem.item.brandName,
      content: `${partItem.item.name} ${partItem.item.price} Won`,
    }
  })
}

const setCollectionData = async () => {
  const params = new URLSearchParams({
    query: lookDetail.value.celebrity.name,
    start: '0',
    number: '5',
  })
  const collectionData = await fetchData({
    path: `${urls.lookSearch}?${params.toString()}`,
  })
  collectionList.value = [
    ...collectionData[0].lookList,
    ...collectionData[0].lookList,
    ...collectionData[0].lookList,
    ...collectionData[0].lookList,
    ...collectionData[0].lookList,
  ]
}

onBeforeMount(async () => {
  await setLookDetailData()
  await setCollectionData()
})
</script>

<template>
  <div class="detail-container">
    <div class="look-info-container">
      <img
        class="full-image-box"
        v-bind:src="fullImageUrl"
      >
      <div class="part-image-box">
        <img
          class="part-image"
          v-bind:src="partImageUrl"
          v-for="(partImageUrl, pid) in partImageList" :key="pid"
        >
      </div>
      <div class="informations-box">
        <div class="information-title">
          <p>
            <span class="myungjo-std-m">【【</span><span class="eng">{{ lookDetail?.celebrity.group.name }}</span> <span class="kor">{{ lookDetail?.celebrity.name }}</span><span class="myungjo-std-m">】】</span>
          </p>
        </div>
        <div
          class="information-item"
          v-for="(info, iid) in itemInfoList" :key="iid"
        >
          <p class="information-brand eng">{{ info.title }}</p>
          <p class="information-name eng">{{ info.content }}</p>
        </div>
      </div>
    </div>
    <div
      class="collection-container"
      v-for="(item, index) in [1,2,3]" :key="index"
    >
      <p class="collection-title">
        <span class="myungjo-std-m">【【</span>{{ lookDetail?.celebrity.name }} 룩 모아보기<span class="myungjo-std-m">】】</span>
      </p>
      <div class="collection-flex">
        <img
          class="collection-image"
          v-bind:src="`${constants.API_URL}${collectionItem.imageUrlList[0]}`"
          v-for="(collectionItem, cid) in collectionList" :key="cid"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  padding-left: calc(104/1920*100vw);
  padding-right: calc(50/1920*100vw);
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
  background-color: white;
  display: inline-block;
  vertical-align: top;
  margin-left: calc(12.8 / 1920 * 100vw);
  overflow: scroll;
}
.part-image {
  width: 100px;
}
.informations-box {
  width: calc(659/1920*100vw);
  height: calc(866/1920*100vw);
  background-color: white;
  display: inline-block;
  vertical-align: top;
  margin-left: calc(58/1920*100vw);
}
.information-title {
  font-size: calc(35/1920*100vw);
  margin-left: calc(20/1920*100vw);
  margin-bottom: calc(25/1920*100vw);
}
.information-item {
  margin-bottom: calc(20/1920*100vw);
}
.information-brand {
  font-size: calc(28/1920*100vw);
  margin-bottom: calc(10/1920*100vw);
}
.information-name {
  font-size: calc(24/1920*100vw);
  /* margin-bottom: calc(24/1920*100vw); */
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
