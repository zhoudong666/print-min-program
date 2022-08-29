<template>
	<view class="app-container">
		<view class="padding-20 margin-bottom-20 bg-white bd-radius-16">
			<slot></slot>
			<view class="params-set fs-36 bd-bottom-solid-default-1 margin-bottom-45">
				<view
					v-for="(paramItem, paramIndex) in simpleParam"
					:key="paramIndex"
					class="params-set-item margin-bottom-45"
				>
					<text v-if="paramItem === 'fileNums'">份数</text>
					<text v-if="paramItem !== 'fileNums' && form.printSettings.length > 0">
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
								<label
									class="radio-item"
									v-for="(optItem, optIndex) in setItem.items"
									:key="optItem.value"
								>
									<view class="radio-title">{{ optItem.tempDesc }}</view>
									<view>
										<radio :value="optItem.tempCode" :checked="optItem.chooseType === 1" />
									</view>
								</label>
							</radio-group>
						</view>
					</view>

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
								@blur="blur"
							/>
						</view>
						<view class="count-btn plus" @click="plus(form[paramItem], 'fileNums')">+</view>
					</view>
				</view>
			</view>
			<view class="params-operator padding-right-10 padding-bottom-10">
				<view class="operator-btn fs-28 c-white bg-print bd-radius-5" @click="higherSet">
					高级设置
				</view>
				<view
					class="operator-btn fs-28 c-white bg-operator margin-left-15 bd-radius-5"
					@click="del"
				>
					删除
				</view>
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
	computed: {
		form() {
			console.log('高级设置返回', this.formInfo);
			this.fileNums = this.formInfo.fileNums;
			return this.formInfo;
		}
	},
	data() {
		return {
			type: 'file', // img 参数设置类型
			// form: {},
			files: [],
			simpleParam: ['fileNums', '颜色', '单双面'],
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
			// this.setParams[index].current = this.setParams[index].option.findIndex(item => {
			// 	return item.value === evt.detail.value
			// })
			// console.log(this.setParams[index].current)
			// this.form[this.setParams[index].prop] = evt.detail.value
			this.$emit('paramsInfo', this.form, this.formIndex);
			console.log('radio', evt, this.form);
		},
		inputChange(evt) {
			// console.log('输入框值变化', evt, evt.detail.value.indexOf("0") === 0 || evt.detail.value === '')
			// const item = evt.currentTarget.id
			// const count = evt.detail.value === '' ? 1 : (evt.detail.value === '0' ? 1 : parseInt(evt.detail.value) > 99 ? 99 : parseInt(evt.detail.value))
			// this.form[item] = count
			// console.log('输入框值变化4', this.form)
			// this.$emit('paramsInfo', this.form, this.formIndex)
			// return count
		},
		blur(evt) {
			const item = evt.currentTarget.id;
			const count =
				evt.detail.value === ''
					? 1
					: evt.detail.value === '0'
					? 1
					: parseInt(evt.detail.value) > 99
					? 99
					: parseInt(evt.detail.value);

			this.form[item] = count;
			this.fileNums = count;
			console.log('输入框值变化4', this.form);
			this.$emit('paramsInfo', this.form, this.formIndex);
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
			this.form[item] = total - 1;
			this.fileNums = total - 1;
			this.$emit('paramsInfo', this.form, this.formIndex);
			console.log('reduce', this.form);
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
			this.form[item] = total + 1;
			this.fileNums = total + 1;
			this.$emit('paramsInfo', this.form, this.formIndex);
			console.log('plus', this.form);
		},
		higherSet() {
			this.$emit('higherSet', this.form, this.formIndex);
		},
		del() {
			this.$emit('delete', this.formIndex);
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

.radio-box {
	display: inline;
}
.radio-box:has(> .radio-group) {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
</style>
