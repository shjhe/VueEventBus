<template>
  <el-aside class="silder-bar" width="200px">
    <el-menu router>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="/">数据响应</el-menu-item>
        <el-menu-item index="/12">选项2</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  .silder-bar{
    min-height: 500px;
    .el-menu{
      height: 100%;
    }
  }
</style>
