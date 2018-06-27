<template>
  <div id="app">
    <el-container>
      <el-header class="header">Vue EventBus处理</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/">数据响应</el-menu-item>
              <el-menu-item index="/12">选项2</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .header{
    line-height: 60px;
  }
}
</style>
