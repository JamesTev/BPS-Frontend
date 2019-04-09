
<script>
import {Line} from 'vue-chartjs'
//const {reactiveProp} = mixins

export default {
  name: "LineChart",
  extends: Line,
  props: ['options', 'chartData'],
  // mixins: [reactiveProp],
  data(){
    return{
      gradient: null
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
