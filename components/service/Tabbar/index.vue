<template>
  <nav>
    <div v-for="(item,index) in navList" :key="index" class="nav-item">

    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          text: "首页",
          route: "/home",
          icon: "icon-tab_icon_home_def",
          activeIcon: "icon-tab_icon_home_sel"
        },
        {
          text: "供求",
          route: "/goods",
          icon: "icon-tab_icon_gq_def",
          activeIcon: "icon-tab_icon_gq_sel"
        },
        {
          text: "竞价",
          route: "/auction",
          icon: "icon-tab_icon_bidding_sel1",
          activeIcon: "icon-tab_icon_bidding_sel"
        },
        {
          text: "资讯",
          route: "/news",
          icon: "icon-tab_icon_news_def",
          activeIcon: "icon-tab_icon_news_sel"
        },
        {
          text: "我的",
          route: "/user",
          icon: "icon-tab_icon_my_sel_",
          activeIcon: "icon-tab_icon_my_sel"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>


