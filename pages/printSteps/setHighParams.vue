<template>
	<view><uni-set-high :formInfo="form" @confirm="_confirm"></uni-set-high></view>
</template>

<script>
export default {
	data() {
		return {
			form: {}
		};
	},
	onShow() {
		this.form = getApp().globalData.fileParam;
	},
	methods: {
		_confirm(form) {
			const index = getApp().globalData.fileParamIndex;
			getApp().globalData.allFile[index] = { ...form };
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss" scoped></style>
