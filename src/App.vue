<template>
  <div id="app">
      <app-toolbar></app-toolbar>
      <collapsing-header></collapsing-header>
      <main-content></main-content>
      <app-footer></app-footer>
      <div class="scroller"></div>
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
  background-color: var(--dark-grey)
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

.container {
  max-width: 1040px;
  margin: auto;
}

h1 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 0.5px;
}

.divider {
  width: 100%;
  background-color: white;
  height: 0.4px;
}

.scroller {
  height: 200vh;
}
</style>
