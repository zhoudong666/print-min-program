<view class="waiting data-v-6c4ba662"><view class="img box data-v-6c4ba662"><image class="image data-v-6c4ba662" src="/static/icon/icon-dui.png"></image></view><view class="msg box data-v-6c4ba662">支付完成，<block qq:if="{{formWhere==='print'||formWhere==='copy'}}"><text class="data-v-6c4ba662">正在出纸 ...</text></block><block qq:else><block qq:if="{{formWhere==='scan'}}"><text class="data-v-6c4ba662">到“我的”下载</text></block></block></view><view data-event-opts="{{[['tap',[['continueHandle',['$event']]]]]}}" class="continue c-print box data-v-6c4ba662" bindtap="__e">继续<block qq:if="{{formWhere==='print'}}"><text class="data-v-6c4ba662">打印</text></block><block qq:else><block qq:if="{{formWhere==='copy'}}"><text class="data-v-6c4ba662">复印</text></block><block qq:else><block qq:if="{{formWhere==='scan'}}"><text class="data-v-6c4ba662">扫描</text></block></block></block></view><view data-event-opts="{{[['tap',[['goHome',['$event']]]]]}}" class="c-print tac margin-top-80 data-v-6c4ba662" bindtap="__e">返回主页</view></view>