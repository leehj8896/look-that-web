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
const brandCollectionList = ref()

const setLookDetailData = async () => {
  const lookDetailData = await fetchData({
    path: `${urls.lookDetail}/${lookId}`,
  })
  lookDetail.value = lookDetailData
  fullImageUrl.value = `${constants.API_URL}${lookDetailData.lookList[0].fullImageUrlList[0].imageUrl}`
  partImageList.value = lookDetailData.lookList[0].itemList.map((partItem: any) => {
    return `${constants.API_URL}${partItem.item.imageUrl}`
  })
  itemInfoList.value = lookDetailData.lookList[0].itemList.map((partItem: any) => {
    if (partItem.item.unit === 'won') {
      return {
        title: partItem.item.brandName,
        content: `${partItem.item.name} ${partItem.item.price} won`,
      }
    } else if (partItem.item.unit === 'dollar') {
      return {
        title: partItem.item.brandName,
        content: `${partItem.item.name} $${partItem.item.price}`,
      }
    }
    return {
      title: '',
      content: '',
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

  const promises = lookDetail.value.lookList[0].itemList.map(async (partItem: any) => {
    const { lookPostList } = await fetchData({ path: `${urls.lookSearchBrand}/${partItem.item.brandName}`, })
    return {
      brandName: partItem.item.brandName,
      lookPostList,
    }
  })
  const responses = await Promise.allSettled(promises)
  brandCollectionList.value = responses.map((response) => {
    if (response.status === 'fulfilled') {
      return response.value
    } else {
      console.error(`Failed to fetch data for brand: ${response.reason}`)
      return {
        brandName: '',
        lookPostList: [],
      }
    }
  })
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
      <div class="part-image-container">
        <div
          class='part-image'
          v-for="(partImageUrl, partImageId) in partImageList"
          :key="`partImg-${partImageId}`"
        >
          <img
            v-bind:src="partImageUrl">
        </div>
      </div>
      <div class="informations-box">
        <div class="information-title">
          <p>
            <span class="myungjo-std-m">【【</span><span class="eng group-name">{{ lookDetail?.celebrity.group.name }}</span> <span class="kor">{{ lookDetail?.celebrity.name }}</span><span class="myungjo-std-m">】】</span>
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
    <div class="collection-container">
      <p class="collection-title">
        <span class="myungjo-std-m">【【</span>{{ lookDetail?.celebrity.name }} 룩 모아보기<span class="myungjo-std-m">】】</span>
      </p>
      <div class="collection-flex">
        <img
          class="collection-image"
          v-bind:src="`${constants.API_URL}${collectionItem.fullImageUrlList[0].imageUrl}`"
          v-for="(collectionItem, cid) in collectionList" :key="cid"
        >
      </div>
    </div>
    <div
      class="collection-container"
      v-for="(brandCollection, index) in brandCollectionList" :key="`collection-container-${index}`"
    >
      <p class="collection-title">
        <span class="myungjo-std-m">【【</span>{{ brandCollection.brandName }} 룩 모아보기<span class="myungjo-std-m">】】</span>
      </p>
      <div class="collection-flex">
        <img
          class="collection-image"
          v-for="(lookPost, bid) in brandCollection.lookPostList" :key="`brand-collection-image-${bid}`"
          v-bind:src="`${constants.API_URL}${lookPost.lookList[0].fullImageUrlList[0].imageUrl}`"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  padding-left: calc(110/1920*100vw);
  padding-right: calc(110/1920*100vw);
  padding-bottom: calc(100/1920*100vw);
  margin-top: calc(85 / 1920 * 100vw);
}
.look-info-container {
  margin-bottom: calc(190 / 1920 * 100vw);
  display: flex;
  flex-direction: row;
}
.full-image-box {
  width: calc(580 / 1920 * 100vw);
  height: calc(740 / 1920 * 100vw);
  background-color: grey;
  display: inline-block;
  vertical-align: top;
}
.part-image-container {
  width: calc(390 / 1920 * 100vw);
  height: calc(740 / 1920 * 100vw);
  vertical-align: top;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.part-image-container > div:nth-child(3n) {
  width: 100%;
  grid-column: 1 / span 2;
}
.part-image-container > div:nth-child(3n) img {
  width: 50%;
}
.part-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.part-image img {
  width: 100%;
}
.part-image-container::-webkit-scrollbar {
  display: none; /* 웹킷(Chrome, Safari) 브라우저에서 스크롤바 감추기 */
}
.informations-box {
  width: calc(660 / 1920 * 100vw);
  height: calc(740 / 1920 * 100vw);
  overflow: scroll;
  background-color: white;
  display: inline-block;
  vertical-align: top;
  margin-left: calc(70 / 1920 * 100vw);
}
.informations-box::-webkit-scrollbar {
  display: none; /* 웹킷(Chrome, Safari) 브라우저에서 스크롤바 감추기 */
}
.information-title {
  font-size: calc(35/1920*100vw);
  margin-left: calc(20/1920*100vw);
  margin-bottom: calc(25/1920*100vw);
}
.information-title span {
  font-size: calc(30 / 1920 * 100vw);
}
.group-name {
  text-transform: uppercase;
}
.information-item {
  margin-bottom: calc(24 / 1920 * 100vw);
}
.information-brand {
  font-size: calc(28/1920*100vw);
  margin-bottom: calc(10/1920*100vw);
  text-transform: capitalize;
}
.information-name {
  font-size: calc(24/1920*100vw);
  text-transform: lowercase;
}
.collection-container {
  margin-bottom: calc(70/1920*100vw);
}
.collection-title {
  font-family: 'Danjo-bold-Regular';
  font-size: calc(25/1920*100vw);
}
.collection-title span {
  font-size: calc(22 / 1920 * 100vw);
}
.collection-flex {
  height: calc(485/1920*100vw);
  margin-top: calc(65/1920*100vw);
  display: flex;
  flex-direction: row;
  gap: calc(98/1920*100vw);
  overflow: scroll;
}
.collection-flex::-webkit-scrollbar {
  display: none; /* 웹킷(Chrome, Safari) 브라우저에서 스크롤바 감추기 */
}
.collection-image {
  width: calc(405/1920*100vw);
  height: calc(485/1920*100vw);
  background-color: grey;
  flex-shrink: 0;
}
</style>
