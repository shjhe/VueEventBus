<template>
  <div>
    <el-tabs tab-position="top">
      <el-tab-pane label="Right组件">
        <h1>数据响应查看</h1>
        <h2>computed获取</h2>
        {{test}}
        <h2>直接$eventBus.global获取，类似$tore</h2>
        {{this.$eventBus.global.test}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  computed: {
    test () {
      // 这里也可以写一个方法获取，默认返回flobal对象
      return this.$eventBus.global.test
    }
  }
}
</script>
