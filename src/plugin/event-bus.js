export default {
  install (Vue) {
    Vue.prototype.$eventBus = new Vue({
      data: {
        global: {}
      },
      watch: {
        'global.test' () {
          console.log(this.global.test)
        }
      },
      methods: {
        setData (key, data) {
          // 由于Vue 不允许在已经创建的实例上动态添加新的根级响应式属性(root-level reactive property)
          // 此方法方便将数据写入全局变量中
          // this.$set(this.global, key, data)
          let result = key ? { [key]: data } : data
          this.global = Object.assign({}, this.global, result)
        }
      }
    })
  }
}
