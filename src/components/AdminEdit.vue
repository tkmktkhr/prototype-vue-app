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
    <input type="number" v-on:change="startTime = $event.target.value" v-bind:value="startTime" min="0">
  </div>
</template>

<script>
export default {
  name: 'adminedit',

  data () {
    return {
      startTime: '',
      endTime: ''
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