<view class="page-container bg-white"><view class="chart-item bg-white padding-left-20 padding-right-20 padding-top-40" style="height:calc(100% - 132rpx);"><view class="first-row flex justify-content-between margin-bottom-20"><view class="tac bd-solid-print-2 bd-radius-5"><view class="text">累计消费</view><view class="text"><text class="c-print fs-40-fw-bold margin-right-10">{{''+$root.g0+''}}</text>元</view></view><view class="tac bd-solid-print-2 bd-radius-5"><view class="text">累计积分抵扣</view><view class="text"><text class="c-print fs-40-fw-bold margin-right-10">{{''+$root.g1+''}}</text>元</view></view></view><view class="second-row margin-bottom-20"><view class="tac bd-solid-print-2 bd-radius-5"><view class="text">累计退款</view><view class="text"><text class="c-print fs-40-fw-bold margin-right-10">{{''+$root.g2+''}}</text>元</view></view></view><view class="third-row margin-bottom-20"><view class="tac bd-solid-print-2 bd-radius-5"><view class="text">累计用纸</view><view class="text"><text class="c-print fs-40-fw-bold margin-right-10">{{historyObj.papers}}</text>张</view></view></view><view class="forth-row flex justify-content-between margin-bottom-20"><view class="tac bd-solid-print-2 bd-radius-5"><view class="text">打印量</view><view class="text"><text class="c-print fs-40-fw-bold margin-right-10">{{historyObj.prints}}</text>张</view></view><view class="tac bd-solid-print-2 bd-radius-5"><view class="text">复印量</view><view class="text"><text class="c-print fs-40-fw-bold margin-right-10">{{historyObj.copys}}</text>张</view></view><view class="tac bd-solid-print-2 bd-radius-5"><view class="text">扫描量</view><view class="text"><text class="c-print fs-40-fw-bold margin-right-10">{{historyObj.scans}}</text>次</view></view></view></view></view>