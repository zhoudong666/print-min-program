<template>
	<view class="app-container_box bg-blank">
		<view class="animate__fadeInUp animate__delay-5s content bg-white">
			<view class="header">
				<text class="title fs-36-fw-bold padding-top-20">附近店铺</text>
				<!-- <text class="btn-more fs-24">更多</text> -->
			</view>
			<view class="body">
				<scroll-view scroll-y class="scroll-view">
					<view v-for="(item,index) in data" :key="index" class="body-item"  @tap.stop="toShop(item)">
						<view class="info">
							<view class="icon-point">
								<image class="icon-point-img" src="../static/icon/icon-location.png" mode="scaleToFill"></image>
							</view>
							<view class="info-item">
								<view class="info-top">
									<text class="fs-30-fw-bold">{{item.shopName}}</text>
									<text v-if="index === 0" class="first-tip c-light bg-tip fs-24">离我最近</text>
								</view>
								<view class="info-bottom c-tip fs-24">
									<view class="supports margin-right-10">{{arrayToString(item.shopSupports)}}</view>
									<view class="addr">{{item.shopAddress}}</view>
								</view>
							</view>
						</view>
						<view class="icons c-tip fs-24">
							<!-- <view class="icons-item">
								<image class="icon-size icon-car" src="../static/icon/icon-car.png" mode="scaleToFill"></image>
								<text>打车</text>
							</view> -->
							<view class="icons-item">
								<image class="icon-size icon-distance" src="../static/icon/icon-distance.png" mode="scaleToFill">
								</image>
								<text>{{item.distance}}km</text>
							</view>
						</view>

					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			visible: {
				type: Boolean,
				default: false
			},
			data: {
				type:Array,
				default:() => []
			}
		},
		watch:{
			visible(val) {
				this.show = val
			}
		},
		data() {
			return {
				show: this.visible
			}
		},
		methods: {
			toShop(data) {
				this.$emit('toShop', data)
			},
			arrayToString(data){
				return data.map(item => item.desc).join('')
			},
			close() {
				this.show = false
				this.$emit('mapshopClose')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-container_box {
		height: 100%;
		// width: 100%;
		// padding: 40upx 0 20upx;
		// height: calc(100% - 60upx);
	}

	.content {
		// width: calc(100% - 40upx);
		height: 100%;
		max-height: 100%;
		padding-bottom: 20upx;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// width: 100%;
		height: 50upx;
		line-height: 50upx;
		margin-bottom: 20upx;
		padding: 0 20upx
	}

	.body {
		width: 100%;
		// height: calc(100% - 70upx);
		height: calc(100% - 70upx);

		.scroll-view {
			width: 100%;
		// height: calc(100% - 90upx);
		height: 100%;
			overflow: hidden;
		}

		.body-item {
			width: calc(100% - 40upx);
			display: flex;
			justify-content: space-between;
			// margin: 0 20upx 15upx;
			padding: 20upx;
		}

		.icon-point {
			width: 40upx;


			&-img {
				width: 30upx;
				height: 30upx;
			}
		}

		.info {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			
			&-item {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
			}
			
			.info-top {
				.first-tip {
					display: inline-block;
					padding: 5upx;
					margin-left: 10upx;
				}
			}
			
			.info-bottom {
				display: flex;
				justify-content: flex-start;
			}
			
			.addr {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
				text-overflow: ellipsis;
				word-break: break-all;
			}
		}

		.icons {
			display: flex;

			&-item {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				margin-left: 10upx;
			}

			.icon-size {
				width: 50upx;
				height: 50upx;
			}
		}
	}
</style>
