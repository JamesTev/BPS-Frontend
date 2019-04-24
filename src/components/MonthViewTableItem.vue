<template>
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <!-- <div class="level-item">
        <p class="subtitle is-6">
          <b-tag rounded size="is-medium">
            {{ overviewObject.formattedDate }}
          </b-tag>
          <strong> {{ overviewObject.pump_volume }}</strong>  litres over <strong>{{ overviewObject.pump_duration }}</strong> mins
        </p>
      </div> -->
      <div class="tile is-vertical">
        <p class="heading is-1" style="padding-bottom:5px">          
          Records for <strong>{{ overviewObject.formattedDate }}</strong>
        </p>
      
        <p class="subtitle is-6">
                <strong> {{ overviewObject.pump_volume }}</strong>  litres over <strong>{{ overviewObject.pump_duration }}</strong> mins
        </p>
                
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <p class="level-item">
        <a
          :disabled="enabled || activeObj.ID==overviewObject.ID"
          class="button is-success"
          @click="$emit('get-inst-readings', overviewObject)"
        >view</a>
      </p>
    </div>
  </nav>
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
