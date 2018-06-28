<template>
  <div id="app">
    <el-container>
      <el-header class="header">Vue EventBus处理</el-header>
      <el-container>
        <v-silder-bar />
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
  color: #333;
  .header{
    line-height: 60px;
    border-bottom: solid 1px #e6e6e6;
  }
}
</style>
