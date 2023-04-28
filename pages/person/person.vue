<template>
	<view class="view-root">
		<view class="profile-photo">
			<image src="../../static/icon/任务进程.png" mode="aspectFit"></image>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script setup>
</script>

<style scoped lang="scss">
	.view-root{
		background-color: $uni-primary;
		height: 400rpx;
		display: flex;
		align-items: center;
		.profile-photo{
			background-color: aliceblue;
			height: 100rpx;
			width: 100rpx;
			margin: 0, 10rpx;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>