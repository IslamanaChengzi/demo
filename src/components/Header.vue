<template>
  <div>
    <router-link to="/markdown">Go to markdown</router-link>
    /
    <router-link to="/elementUi">Go to element</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title:''
    }
  },
}
</script>