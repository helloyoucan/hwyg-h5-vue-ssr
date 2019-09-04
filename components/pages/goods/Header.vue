<template>
  <div class="header">
    <div
      class="tabs"
      @click="handleClickTabItem"
    >
      <span
        v-for="(item,index) in tabListData"
        :key="index"
        class="tabItem"
        :class="{active:tabIndexActive== item.type}"
        :data-type="item.type"
      >
        {{ item.title }}
      </span>
    </div>
    <div class="btnGruop">
      <v-icon
        icon="nav_icon_search"
        class=" searchBtn"
      />
      <v-icon
        icon="nav_icon_issue"
        class="plusBtn"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'VHeader',
  data () {
    const tabListData = [
      { title: '供应信息', type: 2 },
      { title: '求购信息', type: 1 }
    ]
    return {
      tabIndexActive: 2,
      tabListData
    }
  },
  methods: {
    handleClickTabItem (e) {
      const target = e.target
      const newTabIndexActive = parseInt(target.getAttribute('data-type'), 10)
      this.tabIndexActive = newTabIndexActive
      this.$emit('change', newTabIndexActive)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background: linear-gradient(90deg, #f2693d, #cb191d);
  color: #fff;
  height: px2vw(90px);
  line-height: px2vw(90px);
  text-align: center;
  position: relative;
  text-align: center;
}
.tabs {
  display: inline-flex;
}
.tabItem {
  width: px2vw(186px);
  font-size: px2vw(30px);
  color: rgba(#fff, 0.6);
  position: relative;
  transition: color 0.3s;
  &.active {
    color: #fff;
    &::before {
      content: "";
      position: absolute;
      bottom: px2vw(6px);
      left: 50%;
      transform: translateX(-50%);
      width: px2vw(64px);
      height: px2vw(4px);
      background-color: #fff;
      border-radius: px2vw(2px);
    }
  }
}
.btnGruop {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: px2vw(20px);
  line-height: 1;
}
.searchBtn,
.plusBtn {
  width: px2vw(36px);
  height: px2vw(36px);
  font-size: px2vw(30px);
  padding: 10px;
  color: #fff;
}

.plusBtn {
  margin-left: px2vw(20px);
}

</style>
