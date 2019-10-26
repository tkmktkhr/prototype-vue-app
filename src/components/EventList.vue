<template>
  <div class="event-list">
    Event
    <div>
      <select name='event-name'>
        <option value='event1'>Event1</option>
        <option value='event2'>Event2</option>
        <option value='event3'>Event3</option>
      </select>
    </div>
    <!-- Modal -->
    <div id="body">
      <div id="open" v-on:click="modalOpen()">
        button
      </div>
      <div id="mask" v-bind:class="modalShow" v-show="this.showModal">
        <section id="modal">
          <p>takamuku</p>
          <div id="close" v-on:click="modalClose()">
            Colse
          </div>
        </section>
      </div>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
export default {
  name: 'event-list',

  data () {
    return {
      showModal: false
    }
  },
  computed: {
    modalShow: function () {
      return (this.showModal ? "" : "hidden" )
     }
  },
  methods: {
    modalOpen: function () {
      this.showModal = true
    },
    modalClose: function () {
      this.showModal = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  font-size: 16px;
}

#open,
#close {
  cursor: pointer;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  padding: 12px;
  margin: 16px auto 0;
  background: #4caf50;
  color: white;
}

#mask {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
}

#modal {
  background: #fff;
  color: #555;
  width: 300px;
  padding: 40px;
  border-radius: 4px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
}

#modal p {
  margin: 0 0 20px;
}

#mask.hidden {
  display: none;
}

#modal.hidden {
  transform: translate(0, -500px);
}
</style>
