export default {
  install (Vue) {
    Vue.prototype.$eventBus = new Vue({
      data: {
        global: {
          a: '1212121'
        }
      }
    })
  }
}
