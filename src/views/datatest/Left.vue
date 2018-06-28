<template>
  <div class="left-content">
    <el-tabs tab-position="top">
      <el-tab-pane label="Left组件">
        <el-button class="change-button" type="success" @click="handleClick">修改</el-button>
        <el-alert
          v-for="(item, index) in messageList"
          :key="item + index"
          :title="item"
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
      messageList: [],
      timerList: []
    }
  },
  created () {
    this.initEventBus()
  },
  methods: {
    initEventBus () {
      this.$eventBus.setData('test', 'default')
    },
    handleClick () {
      // 修改EventBus数据事件
      // 由于Vue不能修改修改data数据，只能修改其包含的数据，默认数据存在global对象中
      let newRandom = Math.random()
      this.$eventBus.global.test = newRandom
      this.messageList.unshift(`触发了修改test，值为${newRandom}`)
      setTimeout(() => {
        this.messageList.pop()
      }, 5000)
    }
  }
}
</script>
<style lang="scss" scoped>
.left-content{
  text-align: center;
  .change-button{
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .el-alert{
    margin-bottom: 15px;
  }
}
</style>
