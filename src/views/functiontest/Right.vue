<template>
  <div>
    <el-tabs tab-position="top">
      <el-tab-pane label="Right组件">
        <h1>事件响应查看</h1>
        <el-alert
          v-for="(item, index) in eventList"
          :key="item + index"
          :title="item + ''"
          type="success"
          :closable="false"
          />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      eventList: []
    }
  },
  created () {
    this.$eventBus.$on('function', (arg) => {
      this.eventList.unshift(`接收了function事件，参数值为${arg}`)
      setTimeout(() => {
        this.eventList.pop()
      }, 5000)
    })
  }
}
</script>
