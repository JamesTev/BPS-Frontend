
<script>
import {Bar} from 'vue-chartjs'
//const {reactiveProp} = mixins

export default {
  name: "MonthBarChart",
  extends: Bar,
  props: ['chartObject'],
  // mixins: [reactiveProp],
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'cumulative volume [litres]',
          backgroundColor: 'rgba(38, 239, 120, 0.5)',
          borderColor: 'rgba(38, 239, 120, 1)',
          borderWidth: '2',
          data: []
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Day of the Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Cumulative Volume'
						}
					}]
		  }
    }
  }),
  created(){
  },
  watch: {
    chartObject: function(val){
      this.chartdata.labels = this.chartObject.labels;
      this.chartdata.datasets[0].data = this.chartObject.data;
      this.$data._chart.update();
    }
  },
  mounted () {
    this.chartdata.labels = this.chartObject.labels;
    this.chartdata.datasets[0].data = this.chartObject.data;
    this.renderChart(this.chartdata, this.options)
  }
  
}
</script>

<style scoped>


</style>
