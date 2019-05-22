<template>
  <div id="app">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer/footer'

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>

</style>
