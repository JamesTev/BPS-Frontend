<template>
  <div class="container" style="padding-top: 10px">
  
      <b-field label="Choose a month">
      <b-select
        size="is-medium"
        class="title is-3"
        placeholder="Select month"
        v-model="targetMonth"
      >
        <option v-for="(month, index) in months" :value="month" :key="index">{{ month }}</option>
      </b-select>
    </b-field>

    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title is-3">{{targetMonth}}</p>
          <p class="subtitle is-6">Overview for the month</p>
          <h1 v-if="!isLoading" class="title is-1 has-text-primary" style="padding-top:10px">
            {{totalVolume}}
            <span class="title is-6">litres</span>
          </h1>
          <div  v-for="obj in filteredOverviewItems" v-bind:key="obj.id">
            <overview-table-item :overview-object="obj" v-on:get-inst-readings="getInstReadings" v-bind:enabled.sync="isLoadingInst"> </overview-table-item>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Pump Data</p>
          <line-chart ref="chart" v-if="!isLoading"  v-bind:chart-data="chartData" v-bind:options="options"></line-chart>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import axios from "axios";
import MonthViewTableItem from "./MonthViewTableItem.vue";

export default {
  name: "MonthView",
  components: {
    LineChart,
    MonthViewTableItem
  },
  data() {
    return {
      showGraph: true,
      gradient: null,
      isLoading: true,
      isLoadingInst: false,
      targetMonth: "January",
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
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      bpsData: [],
      filteredData: []
    };
  },
  created() {
    axios.get("http://james-tev.local:3010/api/overview_data").then(res => {
      this.bpsData = res.data.data;
      this.chartData.datasets[0].data = this.bpsData.map(
        reading => reading.pump_volume
      );
      this.chartData.datasets[1].data = this.bpsData.map(
        reading => reading.avg_flow_rate
      );
      this.formatChartDates();
      this.targetMonth = this.months[new Date().getMonth()];
      this.isLoading = false;
    });
  },
  computed: {
    totalVolume: function() {
      if (!this.isLoading) {
        return this.filteredData.reduce((sum, d) => sum + d.pump_volume, 0);
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
    }
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
        this.$refs.chart._data._chart.update(); // ! WORKAROUND. TODO: figure out reactive property
        
    }).finally(this.isLoadingInst = false)
    }
  }
};
</script>

<style scoped>
</style>
