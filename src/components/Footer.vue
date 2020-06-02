<template>
  <div class="footer">
    <h5>{{ msg }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg:"@版权所有"
    }
  },
}
</script>

<style lang="less" scoped src='./footer.less'></style>
