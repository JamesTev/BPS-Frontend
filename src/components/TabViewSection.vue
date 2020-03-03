<template>
  <div
    class="container"
  >
    <b-tabs
      v-model="activeTab"
      class="block"
      expanded
    >
      <b-tab-item
        label="Month"
      />
      <b-tab-item
        label="Year"
      />
    </b-tabs>
    <div v-show="activeTab == 0">
      <div>
        <month-view ref="monthViewComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import MonthView from "./MonthView.vue";

export default {
  name: "TabViewSection",
  components: {
    MonthView
  },
  data() {
    return {
      activeTab: 0,
      bpsData: [],
      loadingComplete: false,
      ch1: this.$pnGetMessage('ch1', this.receptor)
      }
  },
  computed:{
      showLoader(){
          return !this.loadingComplete;
      }
  },
  created() {
    
  },
  mounted(){
    this.$pnSubscribe({ channels: ['ch1', 'ch2'], withPresence: true });    
  },
  methods: {
    receptor(msg){
       //msg.message = `sent - ${msg.message}`;
       this.$toast.open({
          message: 'Receiving new data from BPS...',
          duration:4000,
          queue: false
       })
       this.$refs.monthViewComponent.isLoading = true
       this.$refs.monthViewComponent.initLoadingProcess()
       console.log(msg.message);
    }
  }
}
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:100px;
  padding-bottom:100px;
}
</style>
