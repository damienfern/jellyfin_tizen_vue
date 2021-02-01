<template>
  <div>
      <div v-focus-section style="display: flex; flex-wrap: wrap;">
          <h2>First list</h2>
          <div class="listing">
            <div v-for="index in 50" :key="index" @keypress.enter="goToDetails(index)" v-focus class="div" :style="{ 'border-color' : randomColor() }">{{ index }}</div>
          </div>
      </div>

      <div v-focus-section>
          <h2>Second list</h2>
          <div class="listing">
            <div v-for="index in 50" :key="index" @keypress.enter="goToDetails(index)" v-focus class="div" :style="{ 'border-color' : randomColor() }">{{ index }}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    randomColor () {
      return '#' + Math.floor(Math.random()*16777215).toString(16)
    },
    goToDetails (index) {
      console.log('clicked on ' + index);
    }
  }
}
</script>

<style scoped>
.listing {
  display: flex; 
  flex-wrap: wrap;
}

.div {
  height: 300px;
  width: 300px;
  border: 1px solid; 
}

:focus {
  background-color: red;
}
</style>