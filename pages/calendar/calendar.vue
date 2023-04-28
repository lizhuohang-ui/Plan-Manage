<template>
	<!-- 标题部分 -->
	<view class="view-title" v-if="calendarType">
		<view class="view-title-button-image">
			<image class="view-title-image" src="../../static/icon/任务进程.png" mode="aspectFit" @click="switchCalendarMode"></image>
		</view>
		<view class="view-title-view">
			<text class="view-title-text" >任务日历</text>
		</view>
	</view>
	<view class="view-title" v-else>
		<view class="view-title-button-image">
			<image class="view-title-image" src="../../static/icon/文件-计划.png" mode="aspectFit" @click="switchCalendarMode"></image>
		</view>
		<view class="view-title-view">
			<text class="view-title-text" >计划日历</text>
		</view>
	</view>
	
	<!-- 日历部分 -->
	<view v-if="calendarType">
		<uni-calendar 
		class="uni-success"
		:insert="true"
		:start-date="startDate.toISOString().substr(0, 10)"
		:end-date="endDate.toISOString().substr(0, 10)"
		:selected="selected"
		@change="changeTaskCalendar"
		 />
	</view>
	<view v-else>
		<uni-calendar
		class="uni-success"
		:insert="true"
		:start-date="startDate.toISOString().substr(0, 10)"
		:end-date="endDate.toISOString().substr(0, 10)"
		:range="true"
		@change="changePlanCalendar"
		 />
	</view>
	
	<!-- 弹窗部分 -->
	<view v-if="calendarType">
		<uni-popup ref="popup" type="bottom" class="uni-popup">
			<view v-if="show" class="view-popup">
				<view>
					{{selectedDate}}:
				</view>
				<scroll-view scroll-y class="scroll-view">
					<view v-for="(item, index) in task[selectedDate]['taskInformation']" :key="index">
						<uni-section class="section" :title="index" type="line"></uni-section>
						<uni-easyinput class="view-popup-input" type="text" autoHeight v-model="item['taskMessage']" placeholder="请输入内容"></uni-easyinput>
					</view>
					<view class="view-button">
						<button size="mini" @click="addTask">添加任务</button>
						<button size="mini" @click="confirmTask">确定</button>
						<button size="mini" @click="deleteTask">删除任务</button>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
	</view>
	
	<view v-else>
		<uni-popup class="uni-popup" ref="popup" type="bottom">
			<view v-if="showPlan" class="view-popup">
				dada
			</view>
		</uni-popup>
	</view>

</template>

<script setup>
	import { ref, Component } from "vue"
	import { onLoad, onHide } from "@dcloudio/uni-app"
	

	
	//task
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
	
	//calendar
	const nowDate = ref(new Date())
	const startDate = ref(new Date(nowDate.value.getTime() - 15 * 24 * 60 * 60 * 1000));
	const endDate = ref(new Date(nowDate.value.getTime() + 15 * 24 * 60 * 60 * 1000))
	const selectedDate = ref(new Date().toISOString().substr(0, 10))
	const selected = ref([{date: nowDate.value.toISOString().substr(0, 10), info: "已制定"}])
	const calendarType = ref(1)
	
	//input
	const value = ref("")
	
	//popup
	const popup = ref(null)
	const show = ref(false)
	const showPlan = ref(false)
	
	onLoad(() => {
		console.log('onLoad');
		
		const res = {
			"taskInformation": {
					"任务1": {
						"taskMessage": "任务1",
						"taskFinish": 0
					}, 
				},
			"taskNum": 1,
			"taskFinshNum": 0
		}
		
		task.value[selectedDate.value] = res;
	})
		
	
	//method
		//calendar
		const changeTaskCalendar = (e) => {
			selectedDate.value = e.fulldate
			if(task.value[selectedDate.value] == null){
				const res = {
					"taskInformation": {
							"任务1": {
								"taskMessage": "任务1",
								"taskFinish": 0
							}, 
						},
					"taskNum": 1,
					"taskFinshNum": 0
				}
				task.value[selectedDate.value] = res
			}
			popup.value.open()
			show.value = true
			console.log(selectedDate.value)
		}
		
		const changePlanCalendar = (e) => {
			console.log(e);
			popup.value.open()
		}
		
		const close = () => {
			popup.value.close()
		}
		
		const confirm = () => {
			popup.value.close()
		}
		//button
		const addTask = () => {
			console.log("add")
			let taskNum = task.value[selectedDate.value]['taskNum']
			taskNum += 1
			task.value[selectedDate.value]['taskInformation'][`任务${taskNum}`] = {
				"taskMessage": `任务${taskNum}`,
				"taskFinish": 0
			}
			taskNum = task.value[selectedDate.value]['taskNum'] = taskNum
		}

		const deleteTask = () => {
			console.log('delete');
			let taskNum = task.value[selectedDate.value]['taskNum']
			delete task.value[selectedDate.value]['taskInformation'][`任务${taskNum}`]
			task.value[selectedDate.value]['taskNum'] = taskNum - 1
		}
		
		const confirmTask = ()=> {
			if(task.value[selectedDate.value]['taskNum'] != 0){
				selected.value.push({
					date: selectedDate.value,
					info: '已制定'
				})
			}
			else{
				let itemToRemove = {date: selectedDate.value, info: '已制定'}
				let index = selected.value.findIndex(item => item.date === itemToRemove.date)
				if(index > -1){
					selected.value.splice(index, 1)
				}
			}
			popup.value.close()
		}
		
		
		const switchCalendarMode = ()=>{
			if(calendarType.value == 1){
				calendarType.value = 0
			}
			else{
				calendarType.value = 1
			}
		}
		// 生命周期函数
		onHide(() => {
			console.log('onHide');
			try {
				uni.setStorageSync("task", task.value);
			} catch (e) {
				// error
			}
		})
</script>

<style lang="scss" scoped>
	$my-color: #138a07;
	.view-title{
		background-color: $my-color;
		display: flex;
		justify-content: flex-start;
		height: 70rpx;
		.view-title-view{
			width: 75%;
			display: flex;
			justify-content: center;
		}
		.view-title-button-image{
			background-color: aliceblue;
			border-radius: 20rpx;
			box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
			.view-title-image{
				height: 70rpx;
				width: 100rpx;
			}
		}
		.view-title-text{
			font-size: 17pt;
		}
	}
	
	.uni-popup{
		width: 100%;
		background-color: black;
		.view-popup{
			width: 750rpx;
			height: 500rpx;
			background-color: white;
			.scroll-view{
				height: 450rpx;
			}
			.view-popup-input{
				height: 100rpx;
			}
		}
		.view-button{
			display: flex;
			justify-content: space-between;
			color: $my-color;
		}
	}
</style>