<template>
  <div class="calendar-list">
    calendar-list
    <date-picker placeholder="Select Date"></date-picker>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker'

export default {
  name: 'calendar-list',

  components: {
    DatePicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.calendar-list {
  font-size: 30px;
}
</style>
