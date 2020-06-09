<template>
  <div>
    <h1>{{ title }}</h1>
		<base-button></base-button>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'markdown',
  data() {
    return {
      title:'markdown'
    }
  },
}
</script>