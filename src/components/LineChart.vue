
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
                labelString: 'Time [s]'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Measurand'
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
