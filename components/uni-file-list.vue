<template>
  <view class="page" :style="{ height: height }">
    <scroll-view scroll-y="true" class="scroll-container">
      <view class="gap padding-top-20"></view>
      <checkbox-group @change="checkboxChange">
        <view
          class="my-card padding-20 margin-20 bd-radius-10"
          v-for="(item, index) in items"
          :key="item.value"
          :id="index"
        >
          <view class="my-card-header">文件列表</view>
          <view class="my-card-content">
            <view class="flex justify-content-between margin-top-10">
              <text>{{ index + 1 }}. {{ item.fileName }}</text>
              <text>￥{{ item.price | filter2dot }} / 张 * {{item.totalPages}}</text>
            </view>
            <view class="flex justify-content-between margin-top-10">
              <text class="fs-32">{{ item.settingDesc }}</text>
              <label class="check-label">
                <checkbox
                  :value="item.value"
                  :checked="item.checked"
                  :id="index"
                  :disabled="num == index"
                />
                选择
              </label>
            </view>
          </view>
        </view>
      </checkbox-group>
      <view class="gap padding-top-20"></view>
    </scroll-view>
    <!-- 暂时去掉全选按钮 -->
    <view class="check-all my-card padding-20 display-none">
      <label>
        <checkbox :checked="isChecked" @click="isAll" id="all" />
        全选
      </label>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    fileList: {
      type: Array,
      required: true,
      default: () => []
    },
    height: {
      type: String,
      default: '500rpx'
    }
  },
  data() {
    return {
      isChecked: true,
      num: -1
    };
  },
  computed: {
    items() {
      this.lastOne(this.fileList);
      return this.fileList;
    }
  },
  methods: {
    checkboxChange: function(e) {
      var items = this.items,
        values = e.detail.value,
        flag = true,
        valuesInt = values.map(item => Number(item));
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        const item = items[i];
        this.$set(item, 'checked', valuesInt.includes(item.value));
        if (!valuesInt.includes(item.value)) flag = false;
      }
      this.isChecked = flag;
      // console.log(this.items);
      getApp().globalData.basketIds = valuesInt;

      this.lastOne(this.items);
      this.$emit('changeChecked', this.items);
    },
    isAll() {
      this.isChecked = !this.isChecked;
      var items = this.items,
        tempArr = [];
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        const item = items[i];
        this.$set(item, 'checked', this.isChecked);
        if (this.isChecked) tempArr.push(item.value);
      }
      // console.log(this.items);
      getApp().globalData.basketIds = tempArr;
      this.$emit('changeChecked', this.items);
    },
    lastOne(list) {
      let truethList = list.filter(item => item.checked);
      if (truethList.length === 1) this.num = list.findIndex(i => i.checked);
      if (truethList.length > 1) this.num = -1;
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  border-top: 1upx solid transparent;
  border-bottom: 1upx solid transparent;
  width: 100%;
  .my-card {
    background-color: #fff;
    &-header {
      color: #0075ff;
    }
  }
  .my-card:first-child {
    margin-top: 0;
  }
  .my-card:last-child {
    margin-bottom: 0;
  }
  .scroll-container {
    height: calc(100% - 40upx);
    // width: 100%;
  }
  .check-all {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    width: calc(100% - 40upx);
  }
}
</style>
