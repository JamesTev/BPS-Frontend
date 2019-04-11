<template>
  <div id="app">
    <Header />
    <b-loading
      :is-full-page="fullPage"
      :active.sync="isLoading"
      :can-cancel="false"
    />
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
  },
  data(){
    return {
      isLoading: false,
      fullPage: true
    }
  },
  created(){
      
  }
}
</script>

 <style>
#app {
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>

