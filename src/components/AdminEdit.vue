<template>
  <div class="admin">
    <p>ADMINユーザイベント登録ページ</p>
    <div>
      <p>イベント名選択</p>
      <select name='event-name' v-model="eventName">
        <option value='prototype'>イベント名prototype</option>
        <option value='prototype2'>イベント名prototype2</option>
        <option value='test'>イベント名test</option>
      </select>
      <p>開始時刻</p>
      <input type="number" v-on:change="startTimeOclock = $event.target.value" v-bind:value="startTimeOclock" min="9" max="18">:<input type="number" v-on:change="startTimeMinute = $event.target.value" v-bind:value="startTimeMinute" min="0" max="59">
      <p>終了時刻</p>
      <input type="number" v-on:change="endTimeOclock = $event.target.value" v-bind:value="endTimeOclock" min="9" max="18">:<input type="number" v-on:change="endTimeMinute = $event.target.value" v-bind:value="endTimeMinute" min="0" max="59">
    </div>
    <button v-on:click="registerEvent">イベント登録</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminEdit',

  data () {
    return {
      eventName: '',
      startTimeOclock: '',
      startTimeMinute: '',
      endTimeOclock: '',
      endTimeMinute: ''
    }
  },

  computed: {

  },

  methods: {
    registerEvent: function () {
      axios.post('http://192.168.95.101:3000/api1/post1/user1', {
        "collection_name": this.eventName,
        "event_time" : {
          "start_time" : this.startTimeOclock + ":" + this.startTimeMinute,
          "end_time" : this.endTimeOclock + ":" + this.endTimeMinute
        }
      })
      .then(function (response) {

      })
    },

    // eventName: function () {
    //   console.log('sss')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.event {
  font-size: 30px;
}
</style>