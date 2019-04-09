<template>
  <div id="app">
    <Header></Header>
    <b-loading :is-full-page="fullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
    <tab-view-section></tab-view-section>
    <Footer></Footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue'
import TabViewSection from './components/TabViewSection.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'app',
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
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  font-size: 1.5em;
}
.btn:hover {
  background: #666;
}
</style>

