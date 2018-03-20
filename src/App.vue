<template>
  <div id="app">
      <app-toolbar>This is the main toolbar</app-toolbar>
      <collapsing-header></collapsing-header>
      <main-content></main-content>
      <app-footer></app-footer>
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
}

.container {
  width: 1040px;
  margin: auto;
}
</style>
