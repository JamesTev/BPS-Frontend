
<script>
import {Line} from 'vue-chartjs'
//const {reactiveProp} = mixins

export default {
  name: "LineChart",
  extends: Line,
  props: ['chartData'],
  // mixins: [reactiveProp],
  data(){
    return{
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Time [m:s]',
                fontSize: 14
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 40
              }
            }],
            yAxes: [{
              display: true,
              position: "left",
              id: "y-axis-vol",
              scaleLabel: {
                display: true,
                labelString: 'Volume [l]',
                fontSize: 14
              }},
              {
              display: true,
              position: "right",
              id: "y-axis-flow",
              scaleLabel: {
                display: true,
                labelString: 'Flow Rate [l/min]',
                fontSize: 14
              }
              }]
        }
      }

    }
  },
  created(){
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
  
}
</script>

<style scoped>


</style>
