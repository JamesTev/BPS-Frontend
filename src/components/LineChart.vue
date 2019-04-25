
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
                labelString: 'Time [s]',
                fontSize: 14
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Measurand',
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
