<view class="tabs data-v-2ba984f6" style="{{'--color1:'+(fontColor)+';'+('--color2:'+(activeColor)+';')}}"><view class="tabs-title data-v-2ba984f6"><block qq:for="{{titles}}" qq:for-item="item" qq:for-index="index" qq:key="*this"><view data-event-opts="{{[['tap',[['change',[index]]]]]}}" class="{{['title-item','data-v-2ba984f6',(activeInd===index)?'btnactive':'']}}" bindtap="__e">{{''+item+''}}</view></block></view></view>