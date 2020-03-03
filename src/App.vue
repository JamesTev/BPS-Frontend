<template>
  <div id="app">
    <Header />
    <tab-view-section />
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue'
import TabViewSection from './components/TabViewSection.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, TabViewSection, Footer
  }
}
</script>



<style>
#app {
  /* font-family: 'Muli', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>

