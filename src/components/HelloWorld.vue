<template>
  <div>
    <div class="edit">
     <span class="adminedit">{{ adminedit }}</span>
     <span class="useredit">{{ useredit }}</span>
   </div>
   <button v-on:click="api">API</button>
   <div id="calendar-list">
     <calendar-list></calendar-list>
     <!-- </calendar-list> -->
   </div>
 </div>
</template>

<script>
import CalendarList from './CalendarList'
import axios from 'axios'

export default {
  name: 'HelloWorld',

  components: {
    CalendarList
  },

  data () {
    return {
      adminedit: 'Admin edit',
      useredit: 'User edit',
      apiResults: ''
    }
  },

  methods: {
      api: function () {
        axios.get("http://192.168.95.101:3000/api1/ABD")
        .then(response =>
          console.log("äpisato"),
          this.apiResults = response.headers.host
      )}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit {
  float: right;
}

.adminedit {
  padding: 7px;
  margin-right: 5px;
  color: #6091d3;
  border: solid 3px #6091d3;
  border-radius: 10px;
}

.useredit {
  padding: 7px;
  margin-right: 10px;
  color: #4ec4d3;
  border: solid 3px #4ec4d3;
  border-radius: 10px;
}

.calendar-list {
  height: 50%;
  clear: right;
  margin: 20px;
  padding: 20px;
}

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
