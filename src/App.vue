<template>
  <div id="page-container">
    <div id="nav">
      <Navigation />
    </div>
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
:root {
  --nav-height: 60px;
  /* Light theme color */
  --light-nav-color: #fbeeee;
  --light-footer-color: #fbeeee;
  --light-dropdown-color: #ffffff;
  --light-text-color: black;

  /* Dark theme color */
  --dark-nav-color: #18131d;
  --dark-footer-color: #18131d;
  --dark-dropdown-color: #000000df;
  --dark-text-color: rgba(255,255,255,0.8);

  --footer-color: var(--light-footer-color);
  --footer-height: 30px;
  --nav-color: var(--light-nav-color);
  --logo-color: #ef8585;
  --nav-link-color: #ef8585;
  --nav-selectedlink-color: #89dad1;
  --text-color: var(--light-text-color);
  --drop-down-nav-color: var(--light-dropdown-color);
}
body {
  background-color: var(--drop-down-nav-color);
  color: var(--text-color);
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  transition:0.5s;
}
.content {
  padding-top: var(--nav-height);
  padding-bottom: calc(var(--footer-height) + 3em);
}

.page-container {
  position: relative;
  min-height: 100vh;
  
}

::-moz-selection {
  /* Code for Firefox */
  color: white;
  background: var(--nav-selectedlink-color);
}

::selection {
  color: white;
  background: var(--nav-selectedlink-color);
}
.slide-align {
  text-align: center;
}

.tool-tip {
  position: relative;
  display: inline-block;
  cursor: default;
}

.tool-tip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 50%;
  right: 100%;
  /* margin-left: -60px; */
}

.tool-tip:hover .tooltiptext {
  visibility: visible;
}

#page-container{
  position:relative;
  min-height: 100vh;
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--nav-link-color) var(--nav-color);
}

*::-webkit-scrollbar {
  width: 5px;
  height:5px;
}

*::-webkit-scrollbar-track {
  background: var(--nav-color);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--nav-link-color);
  border-radius: 15px;
}

.learn-more {
  background-color: var(--nav-link-color);
  font-weight: bold;
  color: #ffffff;
  width: 50%;
  margin-left: 15px;
  margin-bottom: 15px;
  transition: 0.2s;
  min-width: fit-content;
  
}
.learn-more:hover {
  color: #ffffff;
  transform: scaleX(1.05);
}
</style>
