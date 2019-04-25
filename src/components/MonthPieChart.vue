
<script>
import {Pie, Doughnut} from 'vue-chartjs'
//const {reactiveProp} = mixins

export default {
  name: "MonthPieChart",
  extends: Doughnut,
  props: ['chartObject'],
  // mixins: [reactiveProp],
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'cumulative volume [litres]',
          hoverBordercolor: 'rgb(0,0,0)',
          data: []
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
					position: 'right',
				}
    }
  }),
  created(){
  },
  watch: {
    chartObject: function(val){
      this.prepareRender()
      this.$data._chart.update();
    }
  },
  mounted () {
    this.prepareRender()
    this.renderChart(this.chartdata, this.options)
  },
  methods: {
    prepareRender(){
      this.chartdata.labels = this.chartObject.labels;
      this.chartdata.datasets[0].data = this.chartObject.data;
      this.chartdata.datasets[0].backgroundColor = this.chartObject.colours;
      this.chartdata.datasets[0].borderColor = this.chartObject.colours;
      console.log(this.chartObject.colours)
    }
  }
  
}
</script>

<style scoped>


</style>
