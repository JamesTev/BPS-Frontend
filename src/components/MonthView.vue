<template>
  <div
    class="container"
    style="padding-top: 10px"
  >
    <b-field label="Choose a month">
      <b-select
        v-model="targetMonth"
        size="is-medium"
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

    <b-collapse class="card" aria-id="contentIdForA11y3" >
            <div
                slot="trigger" 
                slot-scope="props"
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title">
                    Overview Stats
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            
            <div class="card-content">
                <div class="content has-text-centered">
                    <div class="tile is-ancestor" style="padding-top: 10px; padding-bottom; 10px">
                      <div class="tile is-4 is-vertical is-parent">
                        <p class="heading is-1">
                            Total Volume</p>
                        <p
                        class="title is-1 has-text-primary">
                        {{ totalVolume }}
                        </p>
                        <p class="subtitle is-6">litres</p>
                      </div>

                      <div class="tile is-4 is-vertical is-parent">
                        <p class="heading is-1">
                            Total Duration</p>
                        <p
                        class="title is-1 has-text-primary">
                        {{ totalDuration }}
                        </p>
                        <p class="subtitle is-6">minutes</p>
                      </div>

                      <div class="tile is-vertical is-parent">
                        <p class="heading is-1">
                            Average Flow</p>
                        <p
                        class="title is-1 has-text-primary">
                              345
                        </p>
                        <p class="subtitle is-6">ml/sec</p>
                      </div>

                    </div>
                </div>
            </div>
            
    </b-collapse>

    <div class="tile is-ancestor" style="padding-top:30px">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-3">
            {{ targetMonth }}
          </p>
          <p class="subtitle is-6">
            Overview for the month
          </p>
          
          <div
            v-for="obj in filteredOverviewItems"
            :key="obj.id"
          >
            <month-view-table-item
              :overview-object="obj"
              :enabled.sync="isLoadingInst"
              @get-inst-readings="getInstReadings"
            />
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">
            Pump Data
          </p>
            <p class="subtitle is-6">Interpolated volume and flow patterns</p>
          <line-chart
            v-if="!isLoading"
            ref="lineChart"
            :chart-data="chartData"
            :options="options"
          />
        </div>
      </div>
    </div>
  <p class="title">Summary Data by Day</p>
  <p class="subtitle is-6">Cumulative volume by day for {{targetMonth}}</p>
  <month-bar-chart v-if="!isLoading" ref="barChart" :chartObject="barChartData"> </month-bar-chart>

  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import MonthBarChart from "./MonthBarChart.vue"
import axios from "axios";
import MonthViewTableItem from "./MonthViewTableItem.vue";

export default {
  name: "MonthView",
  components: {
    LineChart,
    MonthBarChart,
    MonthViewTableItem
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
      barData: [],
      barLabels: [],
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
        //labels: ['January', 'February', 'March', 'April'],
        labels: [],
        datasets: [
          {
            label: "Volume [l]",
            borderColor: "#555F80",
            backgroundColor: "#555F80",
            data: [],
            fill: false
          },
          {
            label: "Flow [ml/s]",
            borderColor: "#26EF78",
            backgroundColor: "#26EF78",
            data: [],
            fill: false
          }
        ]
      },
      bpsData: [],
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
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
        return this.filteredData.reduce((sum, d) => sum + d.pump_duration, 0);
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
          obj.formattedDate = this.formatDate(obj.timestamp);
          return obj;
        });
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
      console.log("updated bar data")
      return dataObj;
    }
  },
  created() {
    //the component will only be created once the main data is loaded in parent component. No worry of globalData not being loaded.
    this.bpsData = this.globalData;
    this.chartData.datasets[0].data = this.bpsData.map(
      reading => reading.pump_volume
    );
    this.chartData.datasets[1].data = this.bpsData.map(
      reading => reading.avg_flow_rate
    );
    this.formatChartDates();
    this.targetMonth = this.months[new Date().getMonth()];
    this.isLoading = false;
    
  },
  methods: {
    formatChartDates() {
      let datesArr = this.bpsData.map(obj => obj.timestamp);
      datesArr = datesArr.map(date => {
        return this.formatDate(date);
      });
      this.chartData.labels = datesArr;
    },
    formatDate(dateString) {
      let d = new Date(dateString);
      return d.getDate() + "/" + (d.getMonth() + 1);
    },
    getInstReadings(overviewID){
      this.isLoadingInst = true;

      axios.get(`http://james-tev.local:3010/api/inst_readings/${overviewID}`).then(res => {
        let d = res.data;
        console.log(res.data)
        this.chartData.datasets[0].data = []
        this.chartData.datasets[1].data = []
        this.chartData.labels = []

        d.forEach((element) => {
          this.chartData.datasets[1].data.push(element.inst_flow_rate)
          this.chartData.datasets[0].data.push(element.inst_volume);
          this.chartData.labels.push(element.t_offset);
        });
        this.$refs.lineChart._data._chart.update(); // ! WORKAROUND. TODO: figure out reactive property
        
        }).finally(this.isLoadingInst = false)
    }
  }
};
</script>

<style scoped>

b-collapse{
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
