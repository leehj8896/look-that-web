<script setup lang="ts">
import { onBeforeMount, onMounted, type Ref } from 'vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { constants } from '@/constants';
import { fetchData } from '@/utils';
import { urls } from '@/urls';
import type { MainBanner, LatestLook, ResLookMainPage, PopularLook } from '@/types';

const router = useRouter()
let bannerItems: Ref<any> = ref([
  {
    bannerId: '',
    imageUrl: `@/assets/main_banner_default.png`,
    linkUrl: '',
  },
])
const showedLookItems: Ref<any> = ref()
const bannerIndex = ref()

const onClickLookItem = (lookItem: LatestLook | PopularLook) => {
  console.log('onClickLookItem', 'lookItem', lookItem)
  router.push({
    name: 'look-detail',
    query: {
      // ...route.query,
      // ...query,
    },
    params: {
      lookId: lookItem.lookPostId,
    },
  })
}

const onClickBannerArrow = (direction: 'left' | 'right') => {
  console.log('onClickBannerArrow', 'direction', direction)
  if (direction === 'left') {
    if (bannerIndex.value - 1 >= 0) {
      bannerIndex.value -= 1
    }
  } else if (direction === 'right') {
    if (bannerIndex.value + 1 < bannerItems.value.length) {
      bannerIndex.value += 1
    }
  }
}

const onClickDelimiter = (selectedIndex: number) => {
  console.log('onClickDelimiter', 'selectedIndex', selectedIndex)
  bannerIndex.value = selectedIndex
}

const setBannerData = async () => {
  const bannerList = await fetchData({ path: urls.bannerList, })
  bannerItems.value = bannerList
}

const setLookItemsData = async () => {
  const { mainLookPostList, }: ResLookMainPage = await fetchData({ path: urls.lookMain, })
  showedLookItems.value = mainLookPostList
}

setBannerData()
setLookItemsData()

// onMounted(async () => {
//   console.log('HomeView > onBeforeMount')
// })
</script>

<template>
  <v-carousel
    v-bind:hide-delimiters="true"
    v-bind:show-arrows="false"
    v-model="bannerIndex"
    class="main-banner"
  >
    <v-carousel-item
      cover
      v-bind:src="`${constants.API_URL}/banner/img/1234.png`"
      v-for="(bannerItem, index) in bannerItems" :key="index"
    >
    </v-carousel-item>
    <div
      class="banner-arrow-left"
      v-on:click="onClickBannerArrow('left')"
    >
    </div>
    <div
      class="banner-arrow-right"
      v-on:click="onClickBannerArrow('right')"
    >
    </div>
    <div class="delimiter-flex">
      <div
        class="delimiter-item"
        v-for="(bannerItem, index) in bannerItems" :key="`delimiter-${index}`"
        v-on:click="onClickDelimiter(index)"
      >
        <img
          src="@/assets/banner_delimiter_selected.webp"
          v-if="index === bannerIndex"
        >
        <img
          src="@/assets/banner_delimiter_not_selected.webp"
          v-else
        >
      </div>
    </div>
  </v-carousel>
  <div class="main-contents">
    <div
      class="look-items-container"
      v-for="(lookCategory, index) in showedLookItems" :key="`look-items-${index}`"
    >
      <h1 class="look-items-title">{{ lookCategory.categoryNameEN }}<span>+</span></h1>
      <p class="look-items-description">{{ lookCategory.categoryNameKR }}</p>
      <div class="look-grid-container">
        <div
          class="look-grid-item"
          v-bind:style="{
            marginRight: index % 5 === 4 ?
              '0' :
              'calc(74 / 1920 * 100vw)'
          }"
          v-for="(lookPost, index) in lookCategory.lookPostList"
          v-bind:key="index"
          v-on:click="onClickLookItem(lookPost)"
        >
          <img
            class="look-image"
            v-bind:src="`${constants.API_URL}${lookPost.lookList[0].fullImageUrlList[0].imageUrl}`"
          >
          <p class="person-name">{{ lookPost.celebrity.name }}</p>
          <p class="brand-names">{{ lookPost.lookList[0].itemList.map((e:any) => e.item.brandName).join(',') }}</p>
        </div>
      </div>
      <img class="look-items-arrow" src="@/assets/arrow_down.webp" alt="">
    </div>
    <!-- <div
      class="look-items-container"
    >
      <h1 class="look-items-title">Popular Look<span>+</span></h1>
      <p class="look-items-description">인기 룩</p>
      <div class="look-grid-container">
        <div
          class="look-grid-item"
          v-bind:style="{
            marginRight: index % 5 === 4 ?
              '0' :
              'calc(74 / 1920 * 100vw)'
          }"
          v-for="(item, index) in popularLookItems"
          v-bind:key="index"
          v-on:click="onClickLookItem(item)"
        >
          <img
            class="look-image"
            v-bind:src="`${constants.API_URL}${item.lookList[0].imageUrlList[0]}`"
          >
          <p class="person-name">{{ item.celebrity.name }}</p>
          <p class="brand-names">{{ item.lookList[0].itemList.map((e:any) => e.item.brandName).join(',') }}</p>
        </div>
      </div>
      <img class="look-items-arrow" src="@/assets/arrow_down.webp" alt="">
    </div> -->
  </div>
</template>

<style scoped>
.main-banner {
  /* margin-left: 53px; */
  margin-top: calc(28 / 1920 * 100vw);
  margin-left: calc(53 / 1920 * 100vw);
  margin-right: 42px;
  /* width: 1826px; */
  width: calc(1826 / 1920 * 100vw);
  /* height: 484px; */
  height: calc(484 / 1920 * 100vw) !important;
  border: calc(5 / 1920 * 100vw) solid #000000;
  opacity: 1;
}
@media(hover: hover) and (pointer: fine) {
  .banner-arrow-left:hover {
    background: linear-gradient(to right, black, rgba(255, 255, 255, 0));
  }
  .banner-arrow-right:hover {
    background: linear-gradient(to left, black, rgba(255, 255, 255, 0));
  }
}
.banner-arrow-left {
  position: absolute;
  left: 0;
  height: 100%;
  width: 20%;
}
.banner-arrow-right {
  position: absolute;
  right: 0;
  height: 100%;
  width: 20%;
}
.delimiter-flex {
  position: absolute;
  bottom: calc(0 / 1920 * 100vw);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: calc(10 / 1920 * 100vw);
}
.delimiter-item {
  height: calc(30 / 1920 * 100vw);
  width: calc(30 / 1920 * 100vw);
  position: relative;
}
.delimiter-item img {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
.main-contents {
  /* margin-top: 74.03px; */
  margin-top: calc(74 / 1920 * 100vw);
}
.look-items-container {
  /* margin-left: 61px; */
  margin-left: calc(61 / 1920 * 100vw);
  /* margin-right: 43px; */
  margin-right: calc(43 / 1920 * 100vw);
  /* margin-bottom: 98px; */
  margin-bottom: calc(98 / 1920 * 100vw);
}
.look-items-title {
  font-family: 'Copperplate';
  margin: 0;
  font-size: calc(27 / 1920 * 100vw);
}
.look-items-title span {
  font-family: 'Danjo-bold-Regular'; 
  font-size: calc(23 / 1920 * 100vw);
  margin-left: calc(19 / 1920 * 100vw);
  position: relative;
  bottom: calc(-2 / 1920 * 100vw);
}
.look-items-description {
  font-family: 'Danjo-bold-Regular';
  font-size: calc(20 / 1920 * 100vw);
  margin-bottom: 10.47px;
}
.look-grid-container {
  /* column-gap: 74px; */
  /* column-gap: calc(74 / 1920 * 100vw); */
  /* grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr); */
}
.look-grid-item {
  display: inline-block;
  /* height: calc((365 + 23 + 80)px); */
  height: calc((365 + 23 + 80) / 1920 * 100vw);
  /* width: 304px; */
  width: calc(304 / 1920 * 100vw);
  /* margin-bottom: 23.32px; */
  margin-bottom: calc(23 / 1920 * 100vw);
}
.look-image {
  background-color: gray;
  /* height: 365px; */
  height: calc(365 / 1920 * 100vw);
  /* width: 304px; */
  width: calc(304/1920*100vw);
  /* margin-bottom: 28.1px; */
  margin-bottom: calc(28 / 1920 * 100vw);
}
.person-name, .brand-names {
  font-family: 'Danjo-bold-Regular';
  font-size: calc(14 / 1920 * 100vw);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.look-items-arrow {
  margin-left: auto;
  margin-right: auto;
  width: calc(25 / 1920 * 100vw);
  height: calc(52 / 1920 * 100vw);
  display: block;
}
</style>
