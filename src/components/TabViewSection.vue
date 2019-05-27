<template>
  <div
    class="container"
    >
    <b-loading :is-full-page="true" :active.sync="showLoader" :can-cancel="true"></b-loading>
    <b-tabs
      v-model="activeTab"
      class="block"
      expanded
    >
    
      <b-tab-item
        label="Day"
        class="has-text-white"
      />
      <b-tab-item
        label="Month"
      />
      <b-tab-item
        label="Year"
      />
    </b-tabs>
    <div v-show="activeTab == 1">
        <div v-if="bpsData.length > 0">
            <month-view ref="monthViewComponent" :globalData="bpsData"></month-view>
        </div>
        <div v-else class="flex-center">
          <div class="media-center">
          <p class="title is-3 is-size-5-mobile has-text-centered">We couldn't get your data</p>
          <p class="subtitle is-6  is-size-7-mobile has-text-centered has-text-weight-light">No connection to the BPS database</p>
          <p class="image" :style="$mq == 'sm' ? 'height:200px; width: 200px': 'height:400px; width: 400px'">
            <img src="@/assets/sad.svg">
          </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import MonthView from "./MonthView.vue";
import axios from "axios";
import config from '@/config.json';

export default {
  name: "TabViewSection",
  components: {
    MonthView
  },
  data() {
    return {
      activeTab: 1,
      bpsData: [],
      loadingComplete: false,
      ch1: this.$pnGetMessage('ch1', this.receptor)
      }
  },
  created() {
    axios.get(config.apiBaseURL+"api/overview_data")
    .then(res => {
      this.bpsData = res.data.data;
    })
    .catch(err => {
      console.log("Couldn't connect to BPS api to fetch overview_data")
    })
    .finally(() => {
      this.loadingComplete= true;
    })
  },
  mounted(){
    this.$pnSubscribe({ channels: ['ch1', 'ch2'], withPresence: true });    
  },
  computed:{
      showLoader(){
          return !this.loadingComplete;
      }
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
