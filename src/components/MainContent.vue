<template>
  <div class="wide-container grid">
    <div class="header">
      <h2>EaaS (Events as a Service)</h2>
      <h3>Whether you're looking for the white glove treatment or a rinse and repeat approach your team can control, <span class="bold">we’ve got you covered</span>. INXPO’s service models are designed to provide you with the best approach to fit your business needs.</h3>
    </div>
    <div class="service-box first">
      <h4 class="identifying-title">We'll Take Care of Things</h4>
      <h2 class="over-sized reg-title">Managed Service</h2>
      <h4 class="identifying-title">INXPO offers full service, white glove support from beginning to end guiding our customers through their entire event lifecycle.</h4>
    </div>
    <div class="service-box second">
      <h4 class="identifying-title">Tailored Just for You</h4>
      <h2 class="over-sized reg-title">Self -Service</h2>
      <h4 class="identifying-title">Work with INXPO’s team to identify and train presenters and create interactive content tailored for an online audience.</h4>
    </div>
    <div class="header2">
      <h2>Strategic Consulting Services</h2>
      <h3>Our team of consultants and subject matter experts can complement or train your team so together we deliver upon your program goals. From consulting and strategy, to technical and program management, INXPO is committed to the quality of your programs and supporting your needs.</h3>
    </div>
    <div class="service-box third">
      <h4 class="identifying-title">Plan and Implement</h4>
      <h2 class="over-sized reg-title">Marketing Strategy</h2>
      <h4 class="identifying-title">Together, with INXPO’s insights, set a promotion plan to attract an audience to your event and measure success.</h4>
    </div>
    <div class="service-box fourth">
      <h4 class="identifying-title">We'll Take Care of Things</h4>
      <h2 class="over-sized reg-title">Managed Service</h2>
      <h4 class="identifying-title">INXPO offers full service, white glove support from beginning to end guiding our customers through their entire event lifecycle.</h4>
    </div>
    <div class="service-box fifth">
      <h4 class="identifying-title">We'll Take Care of Things</h4>
      <h2 class="over-sized reg-title">Managed Service</h2>
      <h4 class="identifying-title">INXPO offers full service, white glove support from beginning to end guiding our customers through their entire event lifecycle.</h4>
    </div>
    <div class="service-box sixth">
      <h4 class="identifying-title">We'll Take Care of Things</h4>
      <h2 class="over-sized reg-title">Managed Service</h2>
      <h4 class="identifying-title">INXPO offers full service, white glove support from beginning to end guiding our customers through their entire event lifecycle.</h4>
    </div>
    <div class="service-box seventh">
      <h4 class="identifying-title">We'll Take Care of Things</h4>
      <h2 class="over-sized reg-title">Managed Service</h2>
      <h4 class="identifying-title">INXPO offers full service, white glove support from beginning to end guiding our customers through their entire event lifecycle.</h4>
    </div>
    <div class="header3">
      <h2>Strategic Consulting Services</h2>
      <h3>Our team of consultants and subject matter experts can complement or train your team so together we deliver upon your program goals. From consulting and strategy, to technical and program management, INXPO is committed to the quality of your programs and supporting your needs.</h3>
    </div>
    <div class="service-box eighth">
      <h4 class="identifying-title">We'll Take Care of Things</h4>
      <h2 class="over-sized reg-title">Managed Service</h2>
      <h4 class="identifying-title">INXPO offers full service, white glove support from beginning to end guiding our customers through their entire event lifecycle.</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-content'
}
</script>

<style scoped>
  .wide-container {
    padding-left: 3vw;
    padding-right: 3vw;
  }

  .grid {
    justify-items: center;
    display: grid;
    grid-row-gap: 7vh;
    grid-column-gap: 4vw;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 90px 300px 90px 300px 300px 90px 300px;
    grid-template-areas:
      "zero zero zero zero" 
      "one one one two"
      "zero-2 zero-2 zero-2 zero-2"
      "three four four five"
      "six six seven seven"
      "zero-3 zero-3 zero-3 zero-3"
      "eight eight eight eight";
  }

  .header {
    grid-area: zero;
    justify-self: start;
    max-width: 950px;
  }

  .header2 {
    grid-area: zero-2;
    justify-self: start;
    max-width: 1050px;
  }

  .header3 {
    grid-area: zero-3;
    justify-self: start;
    max-width: 1050px;
  }

  .reg-title {
    margin-top: 0;
    margin-bottom: 5px;
  }

  .identifying-title {
    font-weight: 300;
  }

  .service-box {
    border-radius: 20px;
    box-shadow: -4px 5px 40px -7px #000;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: red;
    transition: box-shadow 0.4s ease;
    cursor: pointer;
  }

  .service-box:hover {
    box-shadow: -1px 0px 30px -8px #000;
  }

  .first {
    grid-area: one;
  }

  .second {
    grid-area: two;
  }

  .third {
    grid-area: three;
  }

  .fourth {
    grid-area: four;
  }

  .fifth {
    grid-area: five;
  }

  .sixth {
    grid-area: six;
  }

  .seventh {
    grid-area: seven;
  }

  .eighth {
    grid-area: eight;
  }
</style>

