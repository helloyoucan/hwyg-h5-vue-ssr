import Vue from 'vue'
import { fen2yuan } from '@/filters/index.js'
Vue.filter(fen2yuan.name, fen2yuan)
// 全局组件
const requireComponent = require.context('../components/base/', true, /.*.vue$/)
requireComponent.keys().forEach((path) => {
  const Component = requireComponent(path).default
  Vue.component(Component.name, Component)
})
