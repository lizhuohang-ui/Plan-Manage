<template>
	<view v-for="item in nowTask['2023/4/19'].taskMessage" :key="item.id">
		<uni-section class="section" :title="item.id" type="line">
		</uni-section>
		<uni-card>
			<p>{{item.Message}}</p>
		</uni-card>
	</view>
</template>

<script setup>
import { ref } from "vue"

const nowTask = ref({
	"2023/4/19": {
		"taskMessage": [
			{	
				"Message" :"任务1内容",
				"id": "任务1"
			},
			{
				"Message" :"任务2内容",
				"id": "任务2"
			},
			{
				"Message" :"任务3内容",
				"id": "任务3"
			},
		],
		"numTask": 3,
		"numTaskConfirm": 3,
		"numTaskFinish": [0, 0, 0],
	}
})

onload = () => {
	console.log('onload');
}

</script>

<style lang="scss">
	.section {
	}
</style>
