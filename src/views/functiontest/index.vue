<template>
  <div class="data-test">
    <el-alert
      :title="infoTitle"
      type="warning"
      :closable="false"
      />
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
  },
  data () {
    return {
      infoTitle: ''
    }
  },
  created () {
    this.infoTitle = '需要注意的是：$on绑定事件后，在组件销毁时，需要解绑，否则下次进入时，会再次绑定，会触发多次'
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
