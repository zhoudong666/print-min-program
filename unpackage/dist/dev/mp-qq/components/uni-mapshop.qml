<view class="app-container_box bg-blank data-v-05025bec"><view class="animate__fadeInUp animate__delay-5s content bg-white data-v-05025bec"><view class="header data-v-05025bec"><text class="title fs-36-fw-bold padding-top-20 data-v-05025bec">附近店铺</text></view><view class="body data-v-05025bec"><scroll-view class="scroll-view data-v-05025bec" scroll-y="{{true}}"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view data-event-opts="{{[['tap',[['toShop',['$0'],[[['data','',index]]]]]]]}}" class="body-item data-v-05025bec" catchtap="__e"><view class="info data-v-05025bec"><view class="icon-point data-v-05025bec"><image class="icon-point-img data-v-05025bec" src="../static/icon/icon-location.png" mode="scaleToFill"></image></view><view class="info-item data-v-05025bec"><view class="info-top data-v-05025bec"><text class="fs-30-fw-bold data-v-05025bec">{{item.$orig.shopName}}</text><block qq:if="{{index===0}}"><text class="first-tip c-light bg-tip fs-24 data-v-05025bec">离我最近</text></block></view><view class="info-bottom c-tip fs-24 data-v-05025bec"><view class="supports margin-right-10 data-v-05025bec">{{item.m0}}</view><view class="addr data-v-05025bec">{{item.$orig.shopAddress}}</view></view></view></view><view class="icons c-tip fs-24 data-v-05025bec"><view class="icons-item data-v-05025bec"><image class="icon-size icon-distance data-v-05025bec" src="../static/icon/icon-distance.png" mode="scaleToFill"></image><text class="data-v-05025bec">{{item.$orig.distance+"km"}}</text></view></view></view></block></scroll-view></view></view></view>