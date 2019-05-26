<template>

<div class="tile is-ancestor is-flex-mobile" style="padding-bottom:10px">
      <div class="tile is-9 is-vertical is-parent " >
        <div class="tile is-child">
          <p class="heading is-6 has-text-weight-light" >          
            <strong>{{ overviewObject.formattedDate }}</strong> at <strong>{{ overviewObject.formattedTime }}</strong>
          </p>
          <p class="subtitle is-6 is-size-7-mobile">
            <strong> {{ parseFloat(overviewObject.pump_volume).toFixed(2) }}</strong>  litres over <strong>{{ parseFloat(overviewObject.pump_duration/60).toFixed(2) }}</strong> mins
          </p>
        </div>
        
      </div>
      <div class="tile is-3 is-parent">
        <div class="tile is-child" style="float:right">
          <a
          :disabled="enabled || activeObj.ID==overviewObject.ID"
          class="button is-success"
          :class="$mq=='lg' ? '' : 'is-small'"
          @click="$emit('get-inst-readings', overviewObject)"
           >
          view
        </a>
        </div>
      </div>
    </div>
     

</template>

<script>
//import axios from 'axios'

export default {
    name: "MonthViewTableItem",
    props: {
        overviewObject: Object,
        enabled: Boolean,
        activeObj: Object
    },
    data() {
        return{
            
        }
    }
}
</script>

<style scoped>
    .level{
        padding-top:10px;
        padding-bottom:10px;
    }

</style>
