<template>
  <div class="container grid">
    <div class="header">
      <h2 class="grey">EaaS (Events as a Service)</h2>
      <h3 class="grey">Whether you're looking for the white glove treatment or a rinse and repeat approach your team can control, <span class="bold">we’ve got you covered</span>. INXPO’s service models are designed to provide you with the best approach to fit your business needs.</h3>
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
      <h2 class="grey">Strategic Consulting Services</h2>
      <h3 class="grey">Our team of consultants and subject matter experts can complement or train your team so together we deliver upon your program goals. From consulting and strategy, to technical and program management, INXPO is committed to the quality of your programs and supporting your needs.</h3>
    </div>
    <div class="service-box third">
      <h4 class="identifying-title">Plan and Implement</h4>
      <h2 class="over-sized reg-title">Marketing Strategy</h2>
      <h4 class="identifying-title">Together, with INXPO’s insights, set a promotion plan to attract an audience to your event and measure success.</h4>
    </div>
    <div class="service-box fourth">
      <h4 class="identifying-title">Capture and Produce</h4>
      <h2 class="over-sized reg-title">Video Production</h2>
      <h4 class="identifying-title">INXPO’s team can guide you through your video capturing, live streaming and production needs.</h4>
    </div>
    <div class="service-box fifth">
      <h4 class="identifying-title">identify and Interact</h4>
      <h2 class="over-sized reg-title">Engagement Strategy</h2>
      <h4 class="identifying-title">Work with INXPO’s team to identify and train presenters and create interactive content tailored for an online audience.</h4>
    </div>
    <div class="service-box sixth">
      <h4 class="identifying-title">Optimize and Serve</h4>
      <h2 class="over-sized reg-title">Bandwidth Optimization</h2>
      <h4 class="identifying-title">Our technical services team will help you create a plan to ensure Network Readiness for your enterprise.</h4>
    </div>
    <div class="service-box seventh">
      <h4 class="identifying-title">Integrate and Analyze</h4>
      <h2 class="over-sized reg-title">Data Integration</h2>
      <h4 class="identifying-title">Take advantage of our rich API’s, and work with our team to implement a data strategy that works best for you.</h4>
    </div>
    <div class="service-box eighth connect-grid">
      <div class="connect-container">
        <h4 class="identifying-title">Connect and Subscribe</h4>
        <h2 class="over-sized reg-title">Connect with Us</h2>
      </div>
      <img class="sm-icon" src="../assets/facebook.svg">
      <img class="sm-icon" src="../assets/twitter.svg">
      <img class="sm-icon" src="../assets/linkedin.svg">
      <img class="sm-icon" src="../assets/youtube.svg">
      <img class="sm-icon" src="../assets/rss.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-content'
}
</script>

<style scoped>
  .grid {
    padding-right: 15px;
    padding-left: 15px;
    justify-items: center;
    display: grid;
    grid-row-gap: 7vh;
    grid-column-gap: 4vw;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 90px 300px 90px 300px 300px 90px 300px;
    margin-bottom: 20vh;
    grid-template-areas:
      "zero zero zero zero" 
      "one one one two"
      "zero-2 zero-2 zero-2 zero-2"
      "three four four five"
      "six six seven seven"
      "eight eight eight eight";
  }

  .grey {
    color: var(--dark-grey);
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
    font-weight: 400;
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
    transition: box-shadow 0.4s ease;
    cursor: pointer;
  }

  .service-box:hover {
    box-shadow: -1px 0px 30px -8px #000;
  }

  .first {
    grid-area: one;
    background-image: linear-gradient(180deg, rgba(56, 91, 233, .85), rgba(56, 91, 233, .85)),url('../assets/director.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .second {
    grid-area: two;
    background-image: linear-gradient(180deg, rgba(233, 198, 56, 0.85), rgba(233, 198, 56, 0.85)),url('../assets/self.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .third {
    grid-area: three;
    background-image: linear-gradient(180deg, rgba(56, 198, 233, 0.85), rgba(56, 198, 233, 0.85)),url('../assets/marketing.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .fourth {
    grid-area: four;
    background-image: linear-gradient(180deg, rgba(176, 56, 233, 0.85), rgba(176, 56, 233, 0.85)),url('../assets/production.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .fifth {
    grid-area: five;
    background-image: linear-gradient(180deg, rgba(141, 233, 56, 0.85), rgba(141, 233, 56, 0.85)),url('../assets/engagement.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .sixth {
    grid-area: six;
    background-image: linear-gradient(180deg, rgba(233, 56, 56, 0.85), rgba(233, 56, 56, 0.85)),url('../assets/bandwidth.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .seventh {
    grid-area: seven;
    background-image: linear-gradient(180deg, rgba(233, 155, 56, 0.85), rgba(233, 155, 56, 0.85)),url('../assets/data.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .eighth {
    grid-area: eight;
    background-image: linear-gradient(180deg, rgba(56, 91, 233, .85), rgba(56, 91, 233, .85)),url('../assets/director.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .connect-grid {
    display: grid;
    grid-template-columns: 380px 1fr 1fr 1fr 1fr 1fr;
  }

  .sm-icon {
    width: 50px;
    justify-self: center;
    align-self: center;
  }

  @media (max-width: 1024px) {
    .grid {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
    }

    .service-box {
      width: 100%;
      height: 250px;
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 25px;
      padding-bottom: 25px;
      transition: box-shadow 0.4s ease;
      cursor: pointer;
  }

    .connect-grid {
      display: block;
    }

    .connect-container {
      margin-bottom: 15px;
    }

    .sm-icon {
      width: 35px;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
</style>

