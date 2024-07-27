<script setup lang="ts">
import { useRoute } from 'vue-router'
import hyeinImage from '@/assets/hyein.png'

const route = useRoute()
const characterName = route.params.characterName

const personImageUrl = hyeinImage
const personGroupName = 'NEWJEANS'
const personName = '다니엘'
const personDescription = `[${personGroupName} ${personName}]`
const mainLookList: any[] = []
for (let i = 0; i < 10; i++) {
	mainLookList.push({
		imgUrl: hyeinImage,
	})
}
const moodLookItems: any[] = []
for (let i = 0; i < 5; i++) {
	moodLookItems.push({
		imgUrl: hyeinImage,
	})
}
const moodItemItems: any[] = []
for (let i = 0; i < 5; i++) {
	moodItemItems.push({
		imgUrl: hyeinImage,
	})
}
const spotLookItems: any[] = []
for (let i = 0; i < 5; i++) {
	spotLookItems.push({
		imgUrl: hyeinImage,
	})
}
const spotItemItems: any[] = []
for (let i = 0; i < 5; i++) {
	spotItemItems.push({
		imgUrl: hyeinImage,
	})
}

</script>

<template>
	<div class="container">
		<section class="banner-container">
			<div class="banner-background"></div>
			<div class="banner-person">
				<img v-bind:src="personImageUrl" class="person-img">
				<p class="person-description">{{ personDescription }}</p>
			</div>
		</section>
		<section class="main-look-container">
			<div class="select-order">
				<select name="" id="">
					<option value="">최신순</option>
				</select>
			</div>
			<div class="main-look-grid">
				<img v-bind:src="mainLook.imgUrl" alt="" class="main-look-img" v-for="mainLook in mainLookList">
			</div>
		</section>
		<section class="mood-look-container">
			<p class="section-title">MAIN MOOD</p>
			<div class="badge-list">
				<p class="badge">스트릿</p>
				<p class="badge">y2k</p>
				<p class="badge">힙합</p>
			</div>
			<div class="mood-look-list">
				<p class="spread-btn">스트릿 LOOK +</p>
				<div class="mood-look-grid">
					<img 
						class="mood-img"
						v-bind:src="moodLookItem.imgUrl" 
						alt=""
						v-for="moodLookItem in moodLookItems">
				</div>
			</div>
			<div class="mood-item-list">
				<p class="spread-btn">스트릿 ITEM +</p>
				<div class="mood-item-grid">
					<img 
						class="mood-img"
						v-bind:src="moodItemItem.imgUrl" 
						alt=""
						v-for="moodItemItem in moodItemItems">
				</div>
			</div>
		</section>
		<section class="spot-look-container">
			<p class="section-title">MAIN SPOT</p>
			<div class="badge-list">
				<p class="badge">음방</p>
				<p class="badge">출퇴근</p>
				<p class="badge">공항</p>
			</div>
			<div class="spot-look-list">
				<p class="spread-btn">공항 LOOK +</p>
				<div class="spot-item-grid">
					<img 
						class="spot-img"
						v-bind:src="spotLookItem.imgUrl" 
						alt=""
						v-for="spotLookItem in spotLookItems">
				</div>
			</div>
			<div class="spot-item-list">
				<p class="spread-btn">공항 ITEM +</p>
				<div class="spot-item-grid">
					<img 
						class="spot-img"
						v-bind:src="spotItemItem.imgUrl" 
						alt=""
						v-for="spotItemItem in spotItemItems">
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.container {
	width: 100%;
	height: 100%;
	padding-bottom: 70px;
}

.banner-container {
	width: 100%;
	height: 500px;
	border: solid;
	position: relative;
}

.banner-background {
	width: 400px;
	height: 300px;
	border-radius: 50%;
	background-color: yellow;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) rotate(13deg);
}

.banner-person {
	width: 200px;
	height: 300px;
	border: solid;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.person-img {
	width: 100px;
	height: 100px;
	border: solid;
}

.main-look-container {
	width: 100%;
	border: solid;
	padding-left: 100px;
	padding-right: 100px;
}

.main-look-grid {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;
}

.main-look-img {
	width: 100%;
	height: 100%;
}
.mood-look-container {
	width: 100%;
	padding-left: 100px;
	padding-right: 100px;
	border: solid;
}
.section-title {
	text-align: center;
}
.badge-list {
	display: flex;
	justify-content: center;
	gap: 50px;
}
.badge {
	width: 100px;
	border: solid;
	border-radius: 50%;
	text-align: center;
}
.mood-look-grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;
}
.mood-img {
	width: 100%;
}
.mood-item-grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;
}
.spot-look-container {
	padding-left: 100px;
	padding-right: 100px;
}
.spot-item-grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;
}
.spot-img {
	width: 100%;
}
</style>
