<template>
  <div id="app">
      <app-toolbar></app-toolbar>
      <collapsing-header></collapsing-header>
      <main-content></main-content>
      <!-- <app-footer></app-footer>
      <div class="scroller"></div> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900');

body {
  margin: 0;
  --dark-grey: #252525;
  --laser-green: #0E9948;
  --dark-green: #0B803C;
  background-color: var(--dark-grey)
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

.container {
  max-width: 1240px;
  margin: auto;
}

.over-sized {
  font-size: 3rem;
}

h1 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 0.5px;
}

h2 {
  font-weight: 600;
}

h3 {
  font-size: 1.1rem;
  font-weight: 300;
}

h4 {
  margin-top: 0;
  margin-bottom: 0;
}

.bold {
  font-weight: 600;
}

.divider {
  width: 100%;
  background-color: white;
  height: 1px;
  opacity: 0.4;
}

.scroller {
  height: 200vh;
}

@media (max-width: 420px) {
  #app {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
