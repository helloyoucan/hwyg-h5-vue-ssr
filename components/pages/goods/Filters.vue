<template>
  <div class="filter">
    <div :class="{active:showFilterType === FilterType.price}">
      <div
        class="label triangle"
        @click="handleClickFilterItem(FilterType.price)"
      >
        {{ priceSortLabel }}
      </div>
      <div
        class="content"
        @click="handleClickFilterItem('')"
      >
        <ul
          :style="{ height: showFilterType === FilterType.price ? `calc(${priceSortList.length} * ( 80 / 750 ) *100vw)` : 0 }"
          class="filterList"
          @click="handleClickPriceSort"
        >
          <li v-for="(item,index) in priceSortList" :key="index" :class="{active:priceSort === item.type}" :data-type="item.type">
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <div :class="{active:showFilterType === FilterType.storage}">
      <div class="label triangle" @click="handleClickFilterItem(FilterType.storage)">
        存储类型
      </div>
      <div class="content" />
    </div>
    <div :class="{active:showFilterType === FilterType.fish}">
      <div class="label triangle" @click="handleClickFilterItem(FilterType.fish)">
        渔获类型
      </div>
      <div class="content" />
    </div>
    <div :class="{active:showFilterType === FilterType.category}">
      <div class="label triangle" @click="handleClickFilterItem(FilterType.category)">
        <vIcon class="icon" icon="icon_classify" />分类
      </div>
      <div class="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Filters',
  data () {
    const FilterType = {
      price: Symbol('price'),
      storage: Symbol('storage'),
      fish: Symbol('fish'),
      category: Symbol('category')
    }

    const priceSortList = [
      { text: '默认排序', type: '-1' },
      { text: '价格降序', type: '0' },
      { text: '价格升序', type: '1' }
    ]
    return {
      FilterType,
      priceSortList,
      showFilterType: '',
      priceSort: '-1'
    }
  },
  computed: {
    priceSortLabel () {
      const priceSortListItem = this.priceSortList.find(item => item.type === this.priceSort)
      return this.priceSort === '-1' ? '价格' : priceSortListItem && priceSortListItem.text
    }
  },
  methods: {
    handleClickFilterItem (FilterType) {
      const showFilterType = this.showFilterType
      if (showFilterType === FilterType) {
        this.showFilterType = ''
      } else if (showFilterType === '') {
        this.showFilterType = FilterType
      } else {
        this.showFilterType = ''
        this.$nextTick(() => {
          setTimeout(() => {
            this.showFilterType = FilterType
          }, 0)
        })
      }
    },
    handleClickPriceSort (e) {
      const target = e.target
      if (target.nodeName.toLocaleUpperCase() === 'LI') {
        this.priceSort = target.getAttribute('data-type')
        this.showFilterType = ''
      }
      e.stopPropagation()
    }
  }
}
</script>
<style lang="scss" scoped>
.filter {
  display: grid;
  grid-template-columns: px2vw(188px) 1fr 1fr px2vw(186px);
  background: linear-gradient(90deg, #f2693d, #cb191d);
  text-align: center;
  line-height: px2vw(80px);
  color: #666;
  font-size: px2vw(26px);
  :global {
    .icon {
      margin-right: px2vw(10px);
    }
  }
  >div{
    background-color: #fff;
    &:first-child {
      border-top-left-radius: px2vw(25px);
    }
    &:last-child {
      border-top-right-radius: px2vw(25px);
    }
  }
}

.triangle {
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 0.5em solid #666;
    border-left: 0.5em solid transparent;
    border-right: 0.5em solid transparent;
    margin-left: 0.5em;
  }
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: transparent;
  overflow: auto;
  height: 0;
  transition: height 0.3s;
  // height: calc(100% - #{px2vw(90px+80px+100px)});
  ul {
    height: 0;
    transition: height 0.3s;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
}
.active {
  .label {
    color: #ee3f3f;
  }
  .triangle::after {
    border-top-color: #ee3f3f;
  }
  .content {
    height: calc(100% - #{px2vw(90px+80px+100px)});
  }
}

.filterList {
  padding-left: px2vw(30px);
  li {
    list-style: none;
    line-height: px2vw(80px);
    font-size: px2vw(26px);
    color: #666;
    text-align: left;
    position: relative;
    background-color: #fff;
    margin-left: 20px;
    &.active {
      color: #ee3f3f;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #eee;
    }
  }
}
</style>
