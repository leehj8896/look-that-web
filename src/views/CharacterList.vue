<script setup lang="ts">
import CharacterFilterBadge from '@/components/CharacterFilterBadge.vue'
import { onBeforeMount, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const genderFilterList = ref([
  { text: '남자', selected: false,},
  { text: '여자', selected: false,},
])
const ageFilterList = ref([
  { text: '10대', selected: false,},
  { text: '20대', selected: false,},
  { text: '30대', selected: false,},
  { text: '40대', selected: false,},
  { text: '50대', selected: false,},
])
const jobFilterList = ref([
  { text: '가수', selected: false,},
  { text: '아이돌', selected: false,},
  { text: '배우', selected: false,},
  { text: '예능인', selected: false,},
  { text: '래퍼', selected: false,},
  { text: '프로듀서', selected: false,},
])
const selectSort = ref('name')
const characterList: Ref<any[]> = ref([])

const isLocalhost = () => {
    const hostname = window.location.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
}

const onClickFilterBadge = (filter: any) => {
  filter.selected = !filter.selected
}

const onClickCharacter = (character: any) => {
  router.push({
    name: 'character-detail',
    params: {
      characterName: character.name,
    },
  })
}

const setMockCharacterList = () => {
  for (let i=0; i<20; i++) {
    characterList.value.push({
      name: `newjeans-${i}`,
      imageUrl: 'src/assets/newjeans.jpg',
      gender: '',
    })
  }
}

const setCharacterList = () => {
  if (isLocalhost()) {
    setMockCharacterList()
  }
}

onBeforeMount(() => {
  setCharacterList()
})
</script>

<template>
  <div class="character-list">
    <!-- 성별 필터 -->
    <div class="badge-list">
      <character-filter-badge
        v-for="genderFilter in genderFilterList" :key="genderFilter.text"
        v-bind:text="genderFilter.text"
        v-bind:selected="genderFilter.selected"
        v-on:click="onClickFilterBadge(genderFilter)"
      />
    </div>
    <!-- 나이 필터 -->
    <div class="badge-list">
      <character-filter-badge
        v-for="ageFilter in ageFilterList" :key="ageFilter.text"
        v-bind:text="ageFilter.text"
        v-bind:selected="ageFilter.selected"
        v-on:click="onClickFilterBadge(ageFilter)"
      />
    </div>
    <!-- 직업 필터 -->
    <div class="badge-list">
      <character-filter-badge
        v-for="jobFilter in jobFilterList" :key="jobFilter.text"
        v-bind:text="jobFilter.text"
        v-bind:selected="jobFilter.selected"
        v-on:click="onClickFilterBadge(jobFilter)"
      />
    </div>
    <!-- 정렬 -->
    <select 
      v-model="selectSort"
      class="select-sort"
    >
      <option value="name">이름순</option>
      <option value="age">나이순</option>
    </select>
    <!-- 인물 목록 -->
    <div class="character-list-container">
      <div 
        class="character-box"
        v-for="character in characterList" :key="character.name"
        v-on:click="onClickCharacter(character)"
      >
        <img v-bind:src="character.imageUrl">
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-list {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 100px;
}
.badge-list {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
}
.select-sort {
  -webkit-appearance: none; /* Chrome, Safari, Opera */
  -moz-appearance: none; /* Firefox */
  appearance: none;
  outline: none; /* 포커스 아웃라인 제거 */
  border: none; /* 테두리 제거 */
  box-shadow: none; /* 그림자 제거 */
  background: transparent; /* 배경 제거 */
  cursor: pointer; /* 클릭 시 포인터 커서 표시 */
  margin-bottom: 20px;
}
.character-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}
.character-box {
}
.character-box img {
  width: 100%;
  height: 100%;
}
</style>
