import Vue from 'vue'
const requireComponent = require.context('../components/base/', true, /.*.vue$/)
requireComponent.keys().forEach((path) => {
  const Component = requireComponent(path).default
  Vue.component(Component.name, Component)
})
