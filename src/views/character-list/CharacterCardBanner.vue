<script setup lang="ts">
import { constants } from '@/constants'
import { urls } from '@/urls'
import { fetchData } from '@/utils'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import wooseok from '@/assets/wooseok.webp'
import hyein from '@/assets/hyein.png'
import paul_kim from '@/assets/paul_kim.jpg'

// const route = useRoute()

const personCardList = ref()
const model = ref(0)
const slideBanner = ref()

const centerIndex = 3
const 기준값 = 30

let downX = 0

const isLocalhost = () => {
    const hostname = window.location.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
}

const setPersonCardMockData = async () => {
  personCardList.value = [
  {
      groupName: 'NEWJEANS',
      personName: '혜인1',
      imageUrl: wooseok,
    },
    {
      groupName: 'NEWJEANS',
      personName: '혜인2',
      imageUrl: hyein,
    },
    {
      groupName: 'NEWJEANS',
      personName: '혜인3',
      imageUrl: paul_kim,
    },
    {
      groupName: 'NEWJEANS',
      personName: '혜인4',
      imageUrl: wooseok,
    },
    {
      groupName: 'NEWJEANS',
      personName: '혜인5',
      imageUrl: hyein,
    },
    {
      groupName: 'NEWJEANS',
      personName: '혜인6',
      imageUrl: paul_kim,
    },
    {
      groupName: 'NEWJEANS',
      personName: '혜인7',
      imageUrl: hyein,
    },
  ]
}

const fetchPersonCardMockData = () => {
  // const lookDetailData = await fetchData({
  //   path: `${urls.lookDetail}/${lookId}`,
  // })
  // lookDetail.value = lookDetailData
  // fullImageUrl.value = `${constants.API_URL}${lookDetailData.lookList[0].fullImageUrlList[0].imageUrl}`
  // partImageList.value = lookDetailData.lookList[0].itemList.map((partItem: any) => {
  //   return `${constants.API_URL}${partItem.item.imageUrl}`
  // })
  // itemInfoList.value = lookDetailData.lookList[0].itemList.map((partItem: any) => {
  //   if (partItem.item.unit === 'won') {
  //     return {
  //       title: partItem.item.brandName,
  //       content: `${partItem.item.name} ${partItem.item.price} won`,
  //     }
  //   } else if (partItem.item.unit === 'dollar') {
  //     return {
  //       title: partItem.item.brandName,
  //       content: `${partItem.item.name} $${partItem.item.price}`,
  //     }
  //   }
  //   return {
  //     title: '',
  //     content: '',
  //   }
  // })
}

const setPersonCardData = async () => {
  setPersonCardMockData()
}

/**
 * @param cardIndex 0, 1, 2, 3, 4, 5, 6
 */
const getCardStyle = (cardIndex: number) => {
  const indexDiff = centerIndex - cardIndex // 3,2,1,0,1,2,3
  const zIndex = 4 - Math.abs(indexDiff) // 1,2,3,4,3,2,1
  const opacity = zIndex / 4
  const height = `${zIndex * 100}px`
  const width = height
  const top = '50%'
  const left = `calc(50% - ${indexDiff * 100}px)`
  const transform = 'translateX(-50%) translateY(-50%)'

  return {
    zIndex,
    opacity,
    height,
    width,
    top,
    left,
    transform,
  }
}

onBeforeMount(async () => {
  await setPersonCardData()
  // await setCollectionData()
})

onMounted(() => {
  const cardList = slideBanner.value

  cardList.addEventListener('mousedown', (e: MouseEvent) => {
    downX = e.clientX; // 클릭 시 x 좌표 저장
    console.log('downX', downX)
  })

  cardList.addEventListener('mousemove', (e: MouseEvent) => {
    const moveX = e.clientX; // 클릭 시 x 좌표 저장
    if (downX > 0) {
      console.log('moveX', moveX)

      const centerCard = cardList.children[centerIndex]
      const offsetX = moveX - downX; // 마우스와 박스 사이의 거리
      centerCard.style.transform = `translateX(calc(-50% + ${offsetX}px)) translateY(-50%)`
    }
  })

  document.addEventListener('mouseup', (e: MouseEvent) => {
    const upX = e.clientX; // 클릭 시 x 좌표 저장
    console.log('upX', upX)

    if (downX > 0) {
      const diff = downX - upX
      console.log('diff', diff)
      
      // 왼쪽으로
      if (diff > 기준값) {
        const poped = personCardList.value.shift() // 빼기
        personCardList.value.push(poped) // 넣기
      }
      // 오른쪽으로
      else if (diff < -기준값) {
        const poped = personCardList.value.pop() // 빼기
        personCardList.value.splice(0, 0, poped) // 넣기
      }
    }

    const centerCard = cardList.children[centerIndex]
    centerCard.style.transform = `translateX(-50%) translateY(-50%)`
    downX = 0
  })
})
</script>

<template>
  <div class="container">
    <div
      ref="slideBanner"
      class="person-container"
    >
      <div
        class="person-card"
        v-for="(item, cardIndex) in personCardList" :key="item.personName"
        v-bind:style="getCardStyle(cardIndex)"
      >
        <img 
          draggable="false"
          v-bind:src="item.imageUrl"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.person-container {
  width: 100%;
  height: 500px;
  position: relative;
}
.person-card {
  position: absolute;
}
.person-card img {
  height: 100%;
  width: 100%;
}
</style>
