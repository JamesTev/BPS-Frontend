<template>
  <div class="container" style="padding-top: 10px">
    <b-tabs v-model="activeTab" type="is-toggle" expanded>
      <b-tab-item label="Day" icon="google-photos"></b-tab-item>
      <b-tab-item label="Month" icon="library-music"></b-tab-item>
      <b-tab-item label="Year" icon="video"></b-tab-item>
    </b-tabs>

    <div v-show="activeTab == 1">
        <month-view></month-view>
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
      activeTab: 1
      }
  }
}
</script>

<style scoped>
</style>
