<template>
	person
</template>

<script setup>
	uni.login({
		provider:'weixin',
		success: (loginRes) => {
			console.log(loginRes)
		// 获取用户信息
		uni.getUserInfo({
			  provider: 'weixin',
			  success: function (infoRes) {
				console.log('用户昵称为：' + infoRes.userInfo.nickName);
			  }
			});
		}
	})
</script>

<style lang="scss">

</style>