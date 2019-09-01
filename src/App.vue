<template>
  <div id="app">
    <!--keepalive:优化ajax请求，可以减少无用的ajax请求，直接从内存里获取数据。-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
