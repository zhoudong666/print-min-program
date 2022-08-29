<template>
	<view class="app-container fs-36 padding-20">
		<view class="padding-20  bg-white bd-radius-16">
			<slot></slot>
			<view class="params-set bd-bottom-solid-default-1">
				<view
					v-for="(paramItem, paramIndex) in higherParam"
					:key="paramIndex"
					class="params-set-item margin-bottom-45"
					:class="{ wrap: paramItem === '布局' }"
				>
					<text v-if="paramItem === 'fileNums'">份数</text>
					<text v-if="paramItem === 'filePages' && pageTotal > 1">范围</text>
					<text
						v-if="
							paramItem !== 'fileNums' && paramItem !== 'filePages' && form.printSettings.length > 0
						"
					>
						{{ paramItem }}
					</text>
					<view v-if="form.printSettings.length > 0">
						<view
							v-for="(setItem, setIndex) in form.printSettings"
							class="radio-box"
							:key="setIndex"
						>
							<radio-group
								v-if="paramItem === setItem.tempType"
								class="radio-group"
								@change="radioChange"
								:id="setItem.tempType"
							>
								<label class="radio-item" v-for="optItem in setItem.items" :key="optItem.value">
									<view class="radio-title">{{ optItem.tempDesc }}</view>
									<view>
										<radio :value="optItem.tempCode" :checked="optItem.chooseType === 1" />
									</view>
								</label>
							</radio-group>
						</view>
					</view>
					<!-- 份数 -->
					<view
						v-if="paramItem === 'fileNums'"
						class="count bd-solid-default-1 bd-radius-5 bg-numbtn margin-right-12"
					>
						<view class="count-btn reduce" @click="reduce(form[paramItem], 'fileNums')">-</view>
						<view class="">
							<input
								class="count-input bg-white"
								type="number"
								maxlength="2"
								v-model="fileNums"
								id="fileNums"
								@input="inputChange"
								@blur="tipBlur"
							/>
						</view>
						<view class="count-btn plus" @click="plus(form[paramItem], 'fileNums')">+</view>
					</view>
					<!-- 范围 -->
					<view v-if="paramItem === 'filePages' && pageTotal > 1" class="range margin-right-25">
						<view class="range-item">
							<input
								class="count-input bd-solid-default-1 bd-radius-5 bg-white"
								type="number"
								maxlength="3"
								v-model="pageStart"
								@focus="rangeFocus('filePages')"
								@input="rangeChange"
								@blur="rangeBlur"
							/>
							<text class="margin-left-10 margin-right-10">至</text>
						</view>
						<view class="range-item">
							<input
								class="count-input bd-solid-default-1 bd-radius-5 bg-white"
								type="number"
								maxlength="3"
								v-model="pageEnd"
								@focus="rangeFocus('filePages')"
								@input="rangeChange1"
								@blur="rangeBlur1"
							/>
							<text class="magin-left-10">页</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="params-operator bg-white padding-right-30 padding-bottom-30">
			<view class="operator-btn fs-28 c-white bg-print bd-radius-5" @click="reset">还原默认</view>
			<view class="operator-btn fs-28 c-white bg-print margin-left-15 bd-radius-5" @click="confirm">
				确定
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		formIndex: {
			type: Number,
			default: 0
		},
		formInfo: {
			type: Object,
			default: () => {}
		}
	},

	watch: {
		formInfo(val) {
			const pageArr = val.filePages.split('-');
			this.pageStart = pageArr[0];
			this.pageEnd = pageArr[1];
			this.pageTotal = val.fileTotalNums;
			// this.form =  {...val}
			// this.form = Object.assign({}, val);
			for (const k in val) {
				this.$set(this.form, k, val[k]);
			}
			this.fileNums = this.form.fileNums;
			console.log('高级设置', val, this.form);
		}
	},
	data() {
		return {
			isDisabled: false,
			type: 'file', // img 参数设置类型
			rangeIndex: 0,
			paramIndex: 0,
			formItem: '',
			pageStart: 1,
			pageEnd: 0,
			pageTotal: 1,
			form: {},
			higherParam: ['fileNums','颜色', '单双面', '大小', 'filePages',  '布局'],
			fileNums: 1
		};
	},
	onShow() {},
	onHide() {},
	methods: {
		radioChange: function(evt) {
			const type = evt.currentTarget.id;
			const value = evt.detail.value;
			this.form.printSettings.forEach(item => {
				if (item.tempType === type) {
					item.items.forEach(child => {
						child.chooseType = child.tempCode === value ? 1 : 0;
					});
				}
			});
		},
		inputChange(evt) {
			// console.log('输入框值变化', evt, evt.detail.value.indexOf("0") === 0 || evt.detail.value === '')
			// const item = evt.currentTarget.id
			// const count = evt.detail.value === '' ? 1 : (evt.detail.value === '0' ? 1 : parseInt(evt.detail.value) > 99 ? 99 : parseInt(evt.detail.value))
			// this.form[item] = count
			// return count
		},
		tipBlur(evt) {
			console.log(
				'输入框值变化',
				evt,
				evt.detail.value.indexOf('0') === 0 || evt.detail.value === ''
			);
			const item = evt.currentTarget.id;
			const count =
				evt.detail.value === ''
					? 1
					: evt.detail.value === '0'
					? 1
					: parseInt(evt.detail.value) > 99
					? 99
					: parseInt(evt.detail.value);
			this.fileNums = count;
			this.form[item] = count;
			// return count
		},
		reduce(val, item) {
			const total = parseInt(val);
			if (total === 1) {
				uni.showToast({
					icon: 'none',
					title: '数值不能小于1'
				});
				return;
			}
			this.fileNums = total - 1;
			this.form[item] = total - 1;
		},
		plus(val, item) {
			const total = parseInt(val);
			if (total === 99) {
				uni.showToast({
					icon: 'none',
					title: '数值不能大于99'
				});
				return;
			}
			this.fileNums = total + 1;
			this.form[item] = total + 1;
			console.log('plus', this.form);
		},
		rangeFocus(item) {
			// this.rangeIndex = index
			this.formItem = item;
			// console.log('rangeFocus', index)
		},
		rangeChange(evt) {
			// console.log('输入框值变化', evt, evt.detail.value.indexOf("0") === 0 || evt.detail.value === '')
			// const index = evt.currentTarget.id
			// const count = evt.detail.value === '' ? 1 : (evt.detail.value === '0' ? 1 : parseInt(evt.detail.value) >
			// this.pageTotal ? this.pageTotal : parseInt(evt.detail.value))
			// this.pageStart = count
			// return count
		},
		rangeBlur(evt) {
			// const index = evt.currentTarget.id
			const count =
				evt.detail.value === ''
					? 1
					: evt.detail.value === '0'
					? 1
					: parseInt(evt.detail.value) > this.pageTotal
					? this.pageTotal
					: parseInt(evt.detail.value);

			this.pageStart = count;
			return count;
		},
		rangeChange1(evt) {
			// console.log('输入框值变化', evt, evt.detail.value.indexOf("0") === 0 || evt.detail.value === '')
			// const index = evt.currentTarget.id
			// const count = evt.detail.value === '' ? this.pageTotal : (evt.detail.value === '0' ? this.pageTotal : (evt.detail.value < this.pageStart ? this.pageStart : parseInt(evt.detail.value) >
			// this.pageTotal ? this.pageTotal : parseInt(evt.detail.value)))

			// this.pageEnd = count
			console.log('输入框值变化4', this.form);
		},
		rangeBlur1(evt) {
			const count =
				evt.detail.value === ''
					? this.pageTotal
					: evt.detail.value === '0'
					? this.pageTotal
					: evt.detail.value < this.pageStart
					? this.pageStart
					: parseInt(evt.detail.value) > this.pageTotal
					? this.pageTotal
					: parseInt(evt.detail.value);

			this.pageEnd = count;
			return count;
		},
		reset() {
			console.log('初始formInfo和设置后的form', this.formInfo, this.form);
			console.log('getApp().globalData.fileParam', getApp().globalData.fileParam);
			// this.form = {...getApp().globalData.fileParam}
			// this.form = Object.assign({}, getApp().globalData.fileParam);
			for (const k in getApp().globalData.fileParam) {
				this.$set(this.form, k, getApp().globalData.fileParam[k]);
			}
			this.fileNums = getApp().globalData.fileParam.fileNums;
		},
		confirm() {
			const pageArr = [this.pageStart, this.pageEnd];
			this.form.filePages = pageArr.join('-');
			console.log(this.form, '高级设置结果');
			this.$emit('confirm', this.form);
		}
	}
};
</script>

<style lang="scss" scoped>
.params-set {
	&-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.count {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 54upx;

		&-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 70upx;
			height: 50upx;
		}

		&-input {
			width: 140upx;
			text-align: center;
		}
	}

	.range {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		&-item {
			display: flex;
			align-items: center;
		}
	}
}

.params-operator {
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.operator-btn {
		padding: 15upx 40upx;
	}
}

.radio-group,
.radio-item {
	display: flex;
	align-items: center;
	.radio-title {
		// padding: 0 10rpx 0 50rpx;
		width: 120rpx;
		text-align: right;
		padding-right: 10upx;
	}
}

.wrap {
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	.radio-group {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: center;

		.radio-item {
			flex: 33%;
			// justify-content: flex-end;
			margin-top: 30upx;
			.radio-title {
				padding: 0 10upx 0;
				width: auto !important;
			}
		}
	}
}
</style>
