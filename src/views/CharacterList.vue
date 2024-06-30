<script setup lang="ts">
import CharacterFilterBadge from '@/components/CharacterFilterBadge.vue'
import { onBeforeMount, ref } from 'vue';

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

const onClickFilterBadge = (filter: any) => {
  filter.selected = !filter.selected
}

onBeforeMount(() => { /** */ })
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
    <!-- 인물 목록 -->
  </div>
</template>

<style scoped>
.character-list {
  padding-left: 30px;
  padding-right: 30px;
}
.badge-list {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
