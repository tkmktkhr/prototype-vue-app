<template>
  <div>
    <div class="hello">
     <h1>{{ msg }}</h1>
     <h2>Essential Links</h2>
   </div>
   <div id="calendar-list">
     <calendar-list></calendar-list>
     <!-- </calendar-list> -->
   </div>
 </div>
</template>

<script>
import CalendarList from './CalendarList'

export default {
  name: 'HelloWorld',

  components: {
    CalendarList
  },
  data () {
    return {

      msg: 'Welcome to prototyape-app'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
