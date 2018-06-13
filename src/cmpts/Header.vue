<template>
  <header>
      <div class="app-name">
        <img class="logo" src="../assets/img/anon-white.png" alt="">
        <h1 class="title">匿圈</h1>
      </div>
    <Menu class="header-menu" mode="horizontal" theme="primary" @on-select="toRoute">
        <menu-item name="address-center">
          <Icon type="happy-outline"></Icon>
          地址中心
        </menu-item>
        <menu-item name="read">
          <Icon type="refresh"></Icon>
          刷一刷
        </menu-item>
        <menu-item name="post">
          <Icon type="paper-airplane"></Icon>
          发布
        </menu-item>
    </Menu>
  </header>
</template>
<script>
export default {
  methods: {
    toRoute (name) {
      console.log(name)
      this.$router.push(name)
    }
  }
}
</script>

<style scoped lang="less">
header {
  background-color: #2d8cf0;
  display: flex;
  height: 60px;
  flex: none;
}
.ivu-menu-item{
  font-size: 20px;
}
.app-name{
  display: flex;
  flex: none;
  padding-left: 20px;
  align-items: center;
  height: 60px;
  .logo {
    height: 100%;
  }
  .title {
    margin-left: 10px;
    flex: none;
    font-size: 20px;
    color: white;
    font-weight: 600;
  }
}
.header-menu{
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}
</style>
