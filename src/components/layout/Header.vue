<template>
  <header
    class="header"
    style="color:white"
  >
    <section class="top">
      <div class="">
        <div class="container">

          <article class="media">
  
        <div class="media-content">
          <div class="content">
           <h1 class="title is-2 is-size-4-mobile has-text-weight-bold" :class="$mq">
            <strong> BPS Dashboard </strong> 
          </h1>
         
          <p class="subtitle is-size-6-mobile has-text-weight-light">
            Borehole pump system
          </p>
          </div>
        
        </div>
        <div class="media-right">
          <p class="image" :class="$mq == 'lg' ? 'is-128x128' : 'is-64x64'">
            <img src="@/assets/BPS-logo.png">
          </p>
        </div>
      </article>

          
        </div>
      </div>

      
    </section>  
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.top{
  padding-top:2rem;
}
</style>
