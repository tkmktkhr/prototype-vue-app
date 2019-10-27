<template>
  <div class="admin">
    <p>ADMIN</p>
    <div>
      <select name='event-name'>
        <option value='event1'>Event1</option>
        <option value='event2'>Event2</option>
        <option value='event3'>Event3</option>
      </select>
    </div>
    <p>開始時刻</p>
    <input type="number" v-on:change="startTimeOclock = $event.target.value" v-bind:value="startTimeOclock" min="9" max="18">:<input type="number" v-on:change="startTimeMinute = $event.target.value" v-bind:value="startTimeMinute" min="0" max="59">
    <p>終了時刻</p>
    <input type="number" v-on:change="endTimeOclock = $event.target.value" v-bind:value="endTimeOclock" min="9" max="18">:<input type="number" v-on:change="endTimeMinute = $event.target.value" v-bind:value="endTimeMinute" min="0" max="59">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminEdit',

  data () {
    return {
      startTimeOclock: '',
      startTimeMinute: '',
      endTimeOclock: '',
      endTimeMinute: ''
    }
  },

  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.event {
  font-size: 30px;
}
</style>