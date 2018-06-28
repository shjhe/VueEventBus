<template>
  <div class="left-content">
    <el-tabs tab-position="top">
      <el-tab-pane label="Left组件">
        <el-button class="change-button" type="success" @click="handleClick">触发事件</el-button>
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
  methods: {
    handleClick () {
      // 触发EventBus事件
      // 需要在接收组件中绑定相应的事件 this.$eventBus.$on('function', function(){})
      let newRandom = Math.random()
      this.$eventBus.$emit('function', newRandom)
      this.messageList.unshift(`触发了修改function，传参为${newRandom}`)
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
