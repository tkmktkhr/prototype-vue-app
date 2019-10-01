<template>
  <div>
    <div class="edit">
     <span class="adminedit">{{ adminedit }}</span>
     <span class="useredit">{{ useredit }}</span>
   </div>
   <button v-on:click="getapi">GET</button>
   <button v-on:click="postapi">POST</button>
   <button v-on:click="postapi2">POST</button>
   <div id="calendar-list">
     <calendar-list></calendar-list>
     <!-- </calendar-list> -->
   </div>
   <div id="event-list">
     <event-list></event-list>
   </div>
 </div>
</template>

<script>
import CalendarList from './CalendarList'
import EventList from './EventList'
import axios from 'axios'

export default {
  name: 'HelloWorld',

  components: {
    CalendarList,
    EventList
  },

  data () {
    return {
      adminedit: 'Admin edit',
      useredit: 'User edit',
      apiResults: ''
    }
  },

  methods: {
      // api: function () {
      //   axios.get("http://192.168.95.101:3000/api1/ABD")
      //   .then(response =>
      //     console.log("abcdefghijk"),
      //     this.apiResults = response.headers.host
      // )}
      getapi: function () {
        axios.get("http://192.168.95.101:3000/api1/ABD")
        .then(function (response) {
          console.log("äpisato")
          console.log(response)
        }
      )},
      postapi: function () {
        axios({
          method: 'post',
          url: "http://192.168.95.101:3000/api1/post1/123",
          // params: {'user_id': 123},
          // headers: {'Content-Type': 'application/json'},
          // headers: {'X-Requested-With': 'XMLHttpRequest', 'Access-Control-Allow-Origin': '*'},
          data: {
            "collection_name" : "prototype",
            "event_time" : {
              "start_time" : "10:00",
              "end_time" : "11:00"
            }
          }
        })
        .then(function (response) {
          console.log("äpisato")
          console.log(response)
        }
      )},
      postapi2: function () {
        axios.post('http://192.168.95.101:3000/api1/post1/123', {
          "collection_name" : "prototype",
          "event_time" : {
            "start_time" : "10:00",
            "end_time" : "11:00"
          }
        })
        .then(function (response) {
          console.log("postapi2")
          console.log(response)
        }
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
