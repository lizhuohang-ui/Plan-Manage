<template>
	<view style="height: 300rpx;"></view>
	<view class="view-login">
		<text class="view-login-text">
			账号:  
		</text>
		<view class="view-login-input">
			<input placeholder="账号" v-model="account">
		</view>
	</view>
	<view class="view-login">
		<text class="view-login-text">
			密码:  
		</text>
		<view class="view-login-input">
			<input placeholder="密码" v-model="password"> 
		</view>
	</view>
	<view class="view-containor">
		<button class="view-button" size="mini" @click="login">登录</button>
	</view>
	
	
</template>

<script setup>
import { ref } from "vue";
	const account = ref()
	const password = ref()
	
	const login = () => {
		console.log(account.value);
		console.log(password.value);
		uni.request({
			url: 'http://127.0.0.1:8000/test',
			method: 'GET',
			data: {"用户": account.value, "密码": password.value},
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
	
</script>

<style lang="scss" scoped>
	.view-login{
		display: flex;
		padding: 10rpx;
		margin: 5rpx;
		.view-login-text{
			background-color: $uni-primary;
			padding: 10rpx;
		}
		.view-login-input{
			padding: 10rpx;
		}
	}
	
	.view-containor{
		display: flex;
		justify-content: center;
		.view-button{
			padding: 10rpx, 30rpx;
			margin: 10rpx, 20rpx;
		}
	}
</style>
