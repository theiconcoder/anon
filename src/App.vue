<template>
  <div id="app">
    <anon-sidebar/>
    <anon-header/>
    <router-view/>
  </div>
</template>

<script>
import AnonSidebar from './cmpts/Sidebar.vue'
import AnonHeader from './cmpts/Header.vue'
export default {
  name: 'App',
  components: {
    AnonSidebar,
    AnonHeader
  }
}
</script>

<style scoped>
#app {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
