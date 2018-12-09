<template>
  <div class="welcome">
    <h1>{{ msg }}</h1> 
      
        <li><router-link v-bind:to="{ name:'Form' }">Click here to start</router-link></li>    
             
  </div>    

</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Create a Random User profile',      
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:#42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
