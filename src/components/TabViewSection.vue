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
        <div v-if="mainDataLoaded">
            <month-view :globalData="bpsData"></month-view>
        </div>
    </div>
  </div>
</template>

<script>
import MonthView from "./MonthView.vue";
import axios from "axios";

export default {
  name: "TabViewSection",
  components: {
    MonthView
  },
  data() {
    return {
      activeTab: 1,
      bpsData: [],
      mainDataLoaded: false
      }
  },
  created() {
    axios.get("http://james-tev.local:3010/api/overview_data").then(res => {
      this.bpsData = res.data.data;
      this.mainDataLoaded= true;
    });
  },
  computed:{
      showLoader(){
          return !this.mainDataLoaded;
      }
  }
}
</script>

<style scoped>
</style>
