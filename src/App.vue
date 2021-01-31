<template>
  <div id="app">
    <div v-focus-section class="sidenav">
      <a v-focus href="#">About</a>
      <a v-focus href="#">Services</a>
      <a v-focus href="#">Clients</a>
      <a v-focus href="#">Contact</a>
    </div>

    <!-- Page content -->
    <div class="main">
      <h1>Testing spatial</h1>

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
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
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

<style>
 /* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
