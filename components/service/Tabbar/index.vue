<template>
  <nav class="tabBar">
    <nuxt-link v-for="(item,index) in navList" :key="index" class="navItem" :to="item.route">
      <v-icon :icon="item.icon" />
      <v-icon class="active" :icon="item.activeIcon" />
      <p>{{ item.text }}</p>
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        {
          text: '首页',
          route: '/',
          icon: 'icon-tab_icon_home_def',
          activeIcon: 'icon-tab_icon_home_sel'
        },
        {
          text: '供求',
          route: '/goods',
          icon: 'icon-tab_icon_gq_def',
          activeIcon: 'icon-tab_icon_gq_sel'
        },
        {
          text: '竞价',
          route: '/auction',
          icon: 'tab_icon_bidding_sel_',
          activeIcon: 'icon-tab_icon_bidding_sel'
        },
        {
          text: '资讯',
          route: '/news',
          icon: 'icon-tab_icon_news_def',
          activeIcon: 'icon-tab_icon_news_sel'
        },
        {
          text: '我的',
          route: '/user',
          icon: 'icon-tab_icon_my_sel_',
          activeIcon: 'icon-tab_icon_my_sel'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.tabBar {
  position: relative;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  height: px2vw(100px);
  background: #fff;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1px;
    background-color: #eee;
  }
  p{
    margin: 0;
  }
}
.navItem {
  text-align: center;
  color: #666;
  font-size: px2vw(20px);
  text-decoration: none;
  &:link,
  &:visited {
    color: #666;
  }
}
.navItem.nuxt-link-exact-active
// ,.navItem.nuxt-link-active
{
  color: #ee3f3f;
    .v-icon {
      &:first-child {
        display: none;
      }
      &:nth-child(2) {
        display: inline-block;
      }
    }
}
.v-icon {
  margin-top: px2vw(8px);
  width: px2vw(50px);
  height: px2vw(50px);
  &:first-child {
    display: inline-block;
  }
  &:nth-child(2) {
    display: none;
  }
}
</style>
