<view class="my-card data-v-52c3117f"><view class="top-title flex justify-content-between data-v-52c3117f"><view class="shop text-over-ellipsis data-v-52c3117f">{{itemData.shopName}}</view><view class="time text-over-ellipsis data-v-52c3117f">{{itemData.orderTime}}</view></view><view class="content flex data-v-52c3117f"><image class="image data-v-52c3117f" src="/static/icon/icon-document.png"></image><view class="right-part data-v-52c3117f"><view class="box flex justify-content-between data-v-52c3117f"><view class="box-left text-over-ellipsis fw-bold data-v-52c3117f">{{itemData.fileName}}</view><view class="box-right status data-v-52c3117f">{{statusMap[itemData.status]}}</view></view><view class="box flex justify-content-between data-v-52c3117f"><view class="box-left text-over-ellipsis fs-color-grey data-v-52c3117f">1个文件</view><view class="box-right price data-v-52c3117f">{{"￥ "+$root.g0}}</view></view></view></view><view class="buttom flex data-v-52c3117f"><view data-event-opts="{{[['tap',[['printAgain',['$0'],['itemData.orderNumber']]]]]}}" class="print-again data-v-52c3117f" catchtap="__e">{{''+(itemData.orderType==="AA"?"再打印一次":"打印")+''}}</view></view></view>