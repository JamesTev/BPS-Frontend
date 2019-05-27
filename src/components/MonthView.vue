<template>
  <div
    class="container"
    style="padding-top: 10px"
  >
    <b-field label="Choose a month">
      <b-select
        v-model="targetMonth"
        :size="$mq=='lg' ? 'is-medium' : 'is-small'"
        class="title is-3"
        placeholder="Select month"
      >
        <option
          v-for="(month, index) in months"
          :key="index"
          :value="month"
        >
          {{ month }}
        </option>
      </b-select>
    </b-field>

    <b-collapse class="card"  >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
              >
                <p class="card-header-title">
                    Overview Stats
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'angle-down' : 'angle-up'">
                    </b-icon>
                </a>
            </div>
            
            <div class="card-content">
                <div class="content has-text-centered">
                    <div class="tile is-ancestor" style="padding-top: 10px; padding-bottom; 10px">
                      <div class="tile is-1 is-vertical is-parent v-centre">
                        <a :disabled="overviewStatsIdx == 0" @click="statsShiftDisplay(0)" class="button rounded"><b-icon icon="arrow-left"></b-icon></a>
                      </div>
                       <div class="tile is-3 is-vertical is-parent">
                        <p class="heading is-1">
                            Total Volume</p>
                        <p
                        class="title is-1 has-text-primary">
                        {{ parseFloat(totalVolume).toFixed(1) }}
                        </p>
                        <p class="subtitle is-6">{{overviewStatsDisplay[0]}}</p>
                      </div>

                      <div class="tile is-3 is-vertical is-parent">
                        <p class="heading is-1">
                            Total Duration</p>
                        <p
                        class="title is-1 has-text-primary">
                        {{ parseFloat(totalDuration).toFixed(1)  }}
                        </p>
                        <p class="subtitle is-6">{{overviewStatsDisplay[1]}}</p>
                      </div>

                      <div class="tile is-3 is-vertical is-parent">
                        <p class="heading is-1">
                            Average Flow</p>
                        <p
                        class="title is-1 has-text-primary">
                              345
                        </p>
                        <p class="subtitle is-6">{{overviewStatsDisplay[2]}}</p>
                      </div>
                       <div class="tile is-1 is-vertical is-parent v-centre">
                          <a :disabled="overviewStatsIdx == (metrics.length-3)" @click="statsShiftDisplay(1)" class="button rounded"> <b-icon icon="arrow-right"></b-icon></a>
                      </div>

                

                    </div>
                </div>
                
            </div>
            
    </b-collapse>

    <div class="tile is-ancestor" style="padding-top:30px;" >
      <div class="tile is-4 is-vertical is-parent" >

          <div :class="mqBinding('sm', ['box', 'mobile-padding'])">

            <p class="title is-3 is-size-4-mobile">
              {{ targetMonth }}
              <span style="float:right">
                <b-dropdown aria-role="list">
                    <button class="button" slot="trigger">
                        <span>Tools</span>
                        <b-icon icon="caret-down"></b-icon>
                    </button>

                    <b-dropdown-item aria-role="listitem" class="has-text-weight-light" >Reload items</b-dropdown-item>
                </b-dropdown>
              </span>
            </p>
            <p class="subtitle is-6 is-size-7-mobile has-text-weight-light">
              Overview for the month
            </p>
          
           <vue-custom-scrollbar v-if="filteredOverviewItems.length > 0" class="scroll-area"  :settings="scrollSettings">
             <div
              v-for="obj in filteredOverviewItems"
              :key="obj.id"
            >
              <month-view-table-item
                :overview-object="obj"
                :enabled.sync="isLoadingInst"
                :activeObj = "activeTableItem"
                @get-inst-readings="populateInstReadingsGraph"
                @delete-record="deleteRecord"
              />
            </div>
          </vue-custom-scrollbar>
            

            <section>
                <b-message type="is-dark-blue" :active="filteredOverviewItems.length == 0">
                  No data yet for {{targetMonth}} :(
                </b-message>
            </section>

          </div>
        
      </div>
      <div class="tile is-8 is-parent">
        <div class="tile is-child" :class="mqBinding('sm', ['box', 'mobile-padding'])">
          <p class="title is-size-4-mobile">
            Pump Data <span style="float:right">
              <b-taglist attached>
                  <b-tag type="is-dark-blue">{{activeTableItem.formattedDate}}</b-tag>
                  <b-tag type="">{{activeTableItem.formattedTime}}</b-tag>
              </b-taglist>
              <!-- <b-tag :class="dateTimeTagClass" size="is-medium"><strong>{{activeTableItem.formattedDate}}</strong> at <strong>{{activeTableItem.formattedTime}}</strong></b-tag> -->
              </span>
          </p>
            <p class="subtitle is-6 is-size-7-mobile has-text-weight-light">Interpolated volume and flow patterns
            </p>
          <line-chart
            v-if="!isLoading"
            ref="lineChart"
            :chart-data="chartData"
          />
        </div>
      </div>
    </div>
  
  <div id="summary-graph-section" class="section" v-if="filteredOverviewItems.length > 0"> 
    <p class="title is-size-5-mobile">Data by Day
    <span style="float:right"> 
    <b-field >
            <b-radio-button v-model="summaryGraphType"
                native-value="bar"
                type="is-success"
                :size="$mq=='lg' ? 'is-medium' : 'is-small'"
                >
                <b-icon icon="signal"></b-icon>
                
            </b-radio-button>

            <b-radio-button v-model="summaryGraphType"
                native-value="pie"
                type="is-success"
                :size="$mq=='lg' ? 'is-medium' : 'is-small'">
                <b-icon icon="chart-pie"></b-icon>
              
            </b-radio-button>
    </b-field>
    </span>
  </p>
    <p class="subtitle is-6 is-size-7-mobile has-text-weight-light">Cumulative volume by day for {{targetMonth}}</p>
    <month-bar-chart v-if="!isLoading && summaryGraphType=='bar'" ref="barChart" :chartObject="barChartData"> </month-bar-chart>
    <month-pie-chart v-if="!isLoading && summaryGraphType=='pie'" ref="pieChart" :chartObject="pieChartData"> </month-pie-chart>
  </div>
  
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import MonthBarChart from "./MonthBarChart.vue"
import MonthPieChart from "./MonthPieChart.vue"
import vueCustomScrollbar from 'vue-custom-scrollbar'
import axios from "axios";
import MonthViewTableItem from "./MonthViewTableItem.vue";
import config from '@/config.json'
import {generatePalette} from '@/colours.js'

export default {
  name: "MonthView",
  components: {
    LineChart,
    MonthBarChart,
    MonthPieChart,
    MonthViewTableItem,
    vueCustomScrollbar
  },
  props: {
    globalData: Array
  },
  data() {
    return {
      showGraph: true,
      gradient: null,
      isLoading: true,
      isLoadingInst: false,
      targetMonth: "January",
      activeTableItem: {},
      summaryGraphType: "bar",
      metrics: ["litres", "minutes", "l/min"],
      overviewStatsIdx: 0,
      barData: [],
      barLabels: [],
      scrollSettings: {
        maxScrollbarLength: 80,
        suppressScrollX: true
      },
      dateTimeTagClass: "",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Volume",
            borderColor: "#555F80",
            backgroundColor: "rgba(85, 95, 128, 1)",
            yAxisID: "y-axis-vol",
            data: [],
            fill: false
          },
          {
            label: "Flow",
            yAxisID: "y-axis-flow",
            backgroundColor: "#26EF78",
            borderColor: "#26EF78",
            data: [],
            fill: false
          }
        ]
      },
      bpsData: [],
      filteredData: []
    };
  },

  computed: {
    totalVolume: function() {
      if (!this.isLoading) {
        return this.filteredData.reduce((sum, d) => sum + d.pump_volume, 0);
      }
      return 0;
    },
    totalDuration: function() {
      if (!this.isLoading) {
        return this.filteredData.reduce((sum, d) => sum + d.pump_duration/60, 0);
      }
      return 0;
    },
    filteredOverviewItems: function() {
      //let currentMonth = (new Date()).getMonth()+1;
      this.filteredData = this.bpsData
        .filter(obj => {
          let d = new Date(obj.timestamp);
          return (
            d.getMonth() == this.months.findIndex(e => e == this.targetMonth)
          ); //(new Date()).getMonth();
        })
        .map(obj => {
          var formattedTS = this.formatDate(obj.timestamp)
          obj.formattedDate = formattedTS[0];
          obj.formattedTime = formattedTS[1];
          return obj;
        });
      this.filteredData = this.filteredData.reverse()
      return this.filteredData;
    },
    barChartData: function(){
      let now = new Date();
      var numDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate(); //num days in Month
      var dataObj = {labels: Array(numDays).fill(1).map((x, y) => x + y), data: new Array(numDays).fill(0)}
      this.filteredOverviewItems.forEach(el => {
        let day = (new Date(el.timestamp)).getDate()-1; 
        //remember there may be more than one pump record on a day
        dataObj.data[day] = parseFloat(dataObj.data[day])+parseFloat(el.pump_volume);
      })
      return dataObj;
    },
    pieChartData: function(){
      var monthData = this.barChartData
      var pieData = {labels: [], data: [], colours: []}
      var n = 0;
      monthData.data.forEach((d, idx) => {
        if (d > 0){
          pieData.data.push(d)
          pieData.labels.push(monthData.labels[idx])
          n++
        }
      })
      pieData.colours = generatePalette("#f9f8eb","#11df63", n)
      return pieData;
    },
    overviewStatsDisplay: function(){
      return this.metrics.slice(this.overviewStatsIdx, this.overviewStatsIdx+3)
    }
    
  },
  created() {
    //the component will only be created once the main data is loaded in parent component. No worry of globalData not being loaded.
    this.initLoadingProcess()
  },
  methods: {
    initLoadingProcess(){
      this.bpsData = this.globalData;
      this.formatChartDates();
      this.targetMonth = this.months[new Date().getMonth()];

      var overviewRecords = this.filteredOverviewItems
      if(overviewRecords.length > 0){
          console.log(overviewRecords)
          this.populateInstReadingsGraph(overviewRecords[0])  
      }
      this.isLoading = false; 
    },
    formatChartDates() {
      let datesArr = this.bpsData.map(obj => obj.timestamp);
      datesArr = datesArr.map(date => {
        return this.formatDate(date)[0];
      });
      this.chartData.labels = datesArr;
    },
    formatDate(dateString) {
      let d = new Date(dateString);
      var df = d.getDate() + "/" + (d.getMonth() + 1);
      var t = d.toLocaleTimeString().substring(0,5);
      return [df,t];
    },
    populateInstReadingsGraph(overviewObj){
      this.isLoadingInst = true;
      this.activeTableItem = overviewObj;

      var formattedDate = this.formatDate(this.activeTableItem.timestamp);
      this.activeTableItem.formattedDate = formattedDate[0]
      this.activeTableItem.formattedTime = formattedDate[1]
      axios.get(config.apiBaseURL+`api/inst_readings/${overviewObj.ID}`).then(res => {
        let d = res.data;
        this.chartData.datasets[0].data = []
        this.chartData.datasets[1].data = []
        this.chartData.labels = []

        d.forEach((element) => {
          this.chartData.datasets[1].data.push(element.inst_flow_rate) //inst_flow
          this.chartData.datasets[0].data.push(element.inst_volume); //inst_vol
          this.chartData.labels.push(this.tOffsetFormat(element.t_offset)); //t_offset
        });
        this.$refs.lineChart._data._chart.update(); // ! WORKAROUND. TODO: figure out reactive property. this works with barchart?
        }).finally(this.isLoadingInst = false)
       
    },
    statsShiftDisplay(dir=0){
      var delta = 0
      if(dir==0){ //shift left
        this.overviewStatsIdx > 0 ? delta = -1 : delta = 0
      }
      else{
        this.overviewStatsIdx < (this.metrics.length-3) ? delta = +1 : delta = 0
      }
      this.overviewStatsIdx += delta
    },
    tOffsetFormat(t){
      //t_offset string supplied as t in form of number of seconds. This function returns a formatted minutes:secons version
      //E.g. t = 100 -> t_formatted = 1:40
      t = parseFloat(t/60)
      var formatted_str = (parseInt(t)+ ":" + ((t-parseInt(t))*60).toFixed(0));

      if ((formatted_str.length - formatted_str.indexOf(':')) < 3 )
      {
        formatted_str += "0" //to fix times like 3:0 to 3:00
      } 
      return formatted_str
    }, 
    deleteRecord(overviewObj){
     
      this.$dialog.confirm({
          title: 'Deleting record',
          message: 'Are you sure you want to <b>delete</b> your account? This action cannot be undone.',
          confirmText: 'Delete',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => this.$toast.open('Account deleted!')
      })
            
      // axios.delete(config.apiBaseURL+`api/${overviewObj.ID}`).then(res => {
      //   let d = res.data;
      //   this.initLoadingProcess(); //reload data
      //   alert("Record deleted!")
      //   })
    },
    mqBinding(breakSize, classOptions){
      var sizeClasses = {'sm':0, 'md':1, 'lg':2}
      return Object.keys(sizeClasses).indexOf(this.$mq) > sizeClasses[breakSize] ? classOptions[0]: classOptions[1]
    }
  }
};
</script>

<style scoped>
.v-centre {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
b-collapse{
  padding-top: 20px;
  padding-bottom: 20px;
}

.scroll-area {
  position: relative;
  margin: auto;
  height: 400px;
}

.mobile-padding {
  padding-left:10px;
  padding-right:10px;
}

</style>
