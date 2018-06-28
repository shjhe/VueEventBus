<template>
  <div class="data-test">
    <el-row>
      <el-col :span="10">
        <x-left />
      </el-col>
      <el-col :span="4" class="arrow-content">
        <i class="el-icon-d-arrow-right"></i>
      </el-col>
      <el-col :span="10">
        <x-right />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import XLeft from './Left'
import XRight from './Right'
export default {
  components: {
    XLeft,
    XRight
  }
}
</script>
<style lang="scss" scoped>
.arrow-content{
  padding-top: 100px;
  font-size: 40px;
  text-align: center;
}
</style>
