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
  },
  data(){
    return {
      ch1: this.$pnGetMessage('ch1', this.receptor)
    }
  },
  mounted(){
    this.$pnSubscribe({ channels: ['ch1', 'ch2'], withPresence: true });
    
  },
  methods: {
    receptor(msg){
       //msg.message = `sent - ${msg.message}`;
       this.$snackbar.open({
          message: 'New data received from BPS system',
          type: 'is-success',
          position: 'is-bottom-right',
          actionText: 'View',
          duration: 4000,
          indefinite: false,
          onAction: () => {
              this.$toast.open({
                  message: 'Action pressed',
                  queue: false
              })
          }
      })
       console.log(msg.message);
    }
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

