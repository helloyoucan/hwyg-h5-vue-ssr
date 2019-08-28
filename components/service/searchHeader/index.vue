<template>
  <header class="header">
    <span class="messageBtn">
      <v-icon class="messageIcon" icon="nav_icon_message" />
    </span>
    <span class="inputView">
      <v-icon class="searchIcon" icon="nav_icon_search" />
      请输入产品名称
    </span>
    <span class="addBtn">
      <v-icon class="addIcon" icon="nav_icon_issue" />
    </span>
  </header>
</template>
<script>
export default {
  name: 'SearchHeader'
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  height: px2vw(90px);
  background: linear-gradient(90deg, #f2693d, #cb191d);
  display: flex;
  align-items: center;
}
.inputView{
  flex-grow: 1;
  display: inline-block;
  width: px2vw(530px);
  height: px2vw(64px);
  background-color: rgba(#fff,.2);
  border-radius: px2vw(32px);
  font-size: px2vw(30px);
  line-height: px2vw(64px);
  color:rgba(#fff,.5);
  .searchIcon{
    margin: 0 px2vw(12px) 0 px2vw(16px);
    vertical-align: middle;
  }
  &:link, &:visited{
    color:rgba(#fff,.5);
  }
}
.messageBtn,
.addBtn {
  padding: px2vw(20px);
  margin: 0 px2vw(10px);
  font-size: px2vw(30px);
}
.messageBtn{
  margin-right: px2vw(15px);
}
.addBtn {
  margin-left: px2vw(20px);
}
.messageIcon,
.searchIcon,
.addIcon {
  width: px2vw(38px);
  height: px2vw(38px);
  color: #fff;
}
</style>
