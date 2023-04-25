<template>
	<view v-for="(item, index) in task[nowDate]['taskInformation']" :key="item.id">
		<uni-section class="section" :title="index" type="line">
		</uni-section>
		<uni-card>
			<p>{{item.taskMessage}}</p>
		</uni-card>
	</view>
</template>

<script setup>
import { ref } from "vue"
import { onLoad, onHide, onShow } from "@dcloudio/uni-app"
const nowDate = ref(new Date().toISOString().substr(0, 10))
const nowTask = ref({
	
})
const task = ref({
	"日期":{
		"taskInformation": {
			"任务1": {
				"taskMessage": "任务1",
				"taskFinish": 0
			}, 
		},
		"taskNum": 1,
		"taskFinshNum": 0
	}
})

onShow(() => {
	console.log("onShow");
	try {
		const value = uni.getStorageSync('task');
		if (value) {
			console.log(value);
			task.value = value
		}
	} catch (e) {
		// error
	}
})

</script>

<style lang="scss">
	.section {
	}
</style>
