
<script>
import {Line} from 'vue-chartjs'
//const {reactiveProp} = mixins

export default {
  name: "LineChart",
  extends: Line,
  // mixins: [reactiveProp],
  data(){
    return{
      gradient: null
    }
  },
  props: ['options', 'chartData'],
  created(){
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
  
}
</script>

<style scoped>


</style>
