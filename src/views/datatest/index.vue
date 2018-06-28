<template>
  <div class="data-test">
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="handleChange">修改数据</el-button>
      </el-col>
      <el-col :span="10" :offset="4">
        {{test}}
        {{$eventBus.global.test}}
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    test () {
      return this.$eventBus.global && this.$eventBus.global.test
    }
  },
  created () {
    window.tyler = this
    this.initEventBus()
  },
  methods: {
    initEventBus () {
      this.$eventBus.setData('test', {
        a: '1'
      })
    },
    handleChange () {
      this.$eventBus.global.test.a = Math.random()
    }
  }
}
</script>
