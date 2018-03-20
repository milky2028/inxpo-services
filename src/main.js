// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppToolbar from './components/AppToolbar'
import CollapsingHeader from './components/CollapsingHeader'
import MainContent from './components/MainContent'
import AppFooter from './components/AppFooter'

Vue.config.productionTip = true

Vue.component('app-toolbar', AppToolbar)
Vue.component('collapsing-header', CollapsingHeader)
Vue.component('main-content', MainContent)
Vue.component('app-footer', AppFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
