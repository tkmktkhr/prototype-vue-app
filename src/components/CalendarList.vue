<template>
  <div id="calendar-list">
    calendar-list
    <div id="calendar">
      <date-picker  v-model="value"
                    ref="picker"
                    @selected="selected"
                    :inline="true"
                    :format="DatePickerFormat"></date-picker>
    </div>
    <p>{{ value|customFormatter }}</p>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
  name: 'calendar-list',

  components: {
    DatePicker
  },

  data () {
    return {
      value: '',
      DatePickerFormat: 'yyyy-MM-dd'
    }
  },

  methods: {
    selected: function () {
      console.log('-------------')
    }
  },

  filters: {
    customFormatter: function (value) {
      console.log(value)
      // console.log(moment(value))
      return moment(value).format('YYYY-MM-DD')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#calendar-list {
  font-size: 20px;
}

#calendar {
  margin: 30px auto;
}

.vdp-datepicker__calendar .cell {
    border-color: blue !;
}
</style>
