<template>
    <div class="container grid">
        <a href="/"><img class="menu" src="../assets/menu.svg"></a>
        <h1>Services</h1>
        <a href="/"><img class="logo" src="../assets/inxpo-logo.png"></a>
        <div class="divider"></div>
    </div>
</template>

<script>
export default {
  name: 'app-toolbar'
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 43px 1fr 100px;
    grid-template-areas:
    "menu page-title logo"
    "bottom bottom bottom"; 
    margin-top: 11px;
    margin-bottom: 11px;
    grid-row-gap: 2px;
  }

  .logo {
    margin-top: 2px;
    grid-area: logo;
    height: 35px;
  }

  .divider {
    grid-area: bottom;
  }
</style>

