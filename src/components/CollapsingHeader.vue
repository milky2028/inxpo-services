<template>
  <div class="container grid">
    <div class="content">
      <h1 class="over-sized">Services</h1>
      <h3 class="sub-title">We believe that successful events require both the technology and services to deliver an <span class="bold">end-to-end event experience</span>. Whether you need full service support, consulting services along the way, or a self-service option we will tailor our service offerings to your organization's needs.</h3>
      <button class="button">Get in Touch</button>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'collapsing-header'
}
</script>

<style scoped>
.grid {
  height: 55vh;
  display: grid;
  grid-template-rows: 1fr 10px;
  justify-items: center;
  align-items: center;
  grid-template-areas: 
    "main"
    "bottom";
}

.content {
  display: grid;
  align-items: center;
  justify-items: center;
}

.over-sized {
  font-size: 3rem;
}

.sub-title {
  max-width: 750px;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
}

.button{
  border: none;
  border-radius: 22px;
  background-color: var(--laser-green);
  color: white;
  padding: 12px 40px;
  font-size: 1rem;
  box-shadow: -4px 5px 40px -7px #000;
  transition: box-shadow 0.8s ease;
  transition: background-color 0.8s ease;
  cursor: pointer;
  margin-top: 20px;
}

.button:hover {
  box-shadow: -2px 3px 40px -8px #000;
  background-color: var(--dark-green);
}

.divider {
  grid-area: bottom;
}

@media (max-width: 770px) {
  .sub-title {
    max-width: 550px;
  }
}
</style>

