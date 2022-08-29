<template>
	<view class="tabs" :style="{ '--color1': fontColor, '--color2': activeColor }">
		<view class="tabs-title">
			<template v-for="(item, index) in titles">
				<view
					:key="item"
					@click="change(index)"
					class="title-item"
					:class="{ btnactive: activeInd === index }"
				>
					{{ item }}
				</view>
			</template>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		titles: {
			type: Array,
			required: true,
			default: () => []
		},
		activeIndex: {
			type: Number,
			default: 0
		},
		fontColor: {
			type: String,
			default: '#000'
		},
		activeColor: {
			type: String,
			default: '#ff9966'
		}
	},
	computed: {
		aaa() {
			this.activeInd = this.activeIndex;
			return '';
		}
	},
	data() {
		return {
			activeInd: 0
		};
	},
	methods: {
		change(e) {
			this.activeInd = e;
			this.$emit('tabsClick', this.activeInd);
		}
	}
};
</script>

<style lang="scss" scoped>
.tabs {
	&-title {
		display: flex;
		justify-content: space-between;
		color: var(--color1);
		.title-item {
			text-align: center;
			padding-bottom: 5upx;
		}
	}
}
.btnactive {
	color: var(--color2);
	border-bottom: 5upx solid var(--color2);
	font-weight: 700;
}
</style>
