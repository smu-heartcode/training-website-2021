<template>
  <div class="container">
    <div class="row title-row">
      <div class="col-lg mt-5">
        <h2>Welcome to Project HeartCode's training site!</h2>
        <div class="sub-text">
          <p>What you will find here:</p>
          <ul>
            <li>
              <span class="cursor-default">🔥</span> Slides that are shared
              during the lesson
            </li>
            <li>
              <span class="cursor-default">🔥</span> Materials for in-class
              exercises
            </li>
            <li>
              <span class="cursor-default">🔥</span> Code snippets for you to
              refer
            </li>
            <li>
              <span class="cursor-default">🔥</span> Additional materials for
              you to
              <span class="tool-tip"
                >⚡<span class="tooltiptext">SHAZAM!!!</span></span
              >
              your webpage!
            </li>
          </ul>
          <p>
            Need more? Feel free to ask your mentors for help or additional
            resources!
          </p>
          <p>
            Make sure you have installed the relevant files beforehand, a guide can be downloaded <a href="https://drive.google.com/uc?id=1q7n0y9jMi2ngBL86OJLcXN2dnNr6AAqf&export=download"><span class="ext-link">here!</span></a>
          </p>
        </div>
      </div>
      <div class="col-lg mt-5 image-space">
        <h1 class="buffer-text align-middle">
          HAPPY CODING<span class="line">!</span>
        </h1>
      </div>
    </div>
    <hr />
    <div class="card-deck row mt-5">
      <div class="card col-md" v-for="topic in topics" :key="topic">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ topic.title }}</h5>
          <p class="card-text"><span v-html="topic.desc"></span></p>
          <router-link :to="topic.link" class="mt-auto"
            ><button class="btn learn-more">Learn More!</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topics: [
        {
          img: "",
          title: "HTML & CSS",
          desc: "The two core technologies for building Web pages. HTML <b>(Hypertext Markup Language)</b> provides the structure of the page while CSS <b>(Cascading Stylesheet)</b> defines the style for the page.",
          link: "/htmlcss",
        },
        {
          img: "",
          title: "Javascript",
          desc: "Javascript is a programming language that allows you to create an interactive website that can dynamically change based on the user's actions!",
          link: "/javascript",
        },
        {
          img: "",
          title: "Bootstrap",
          desc: "Bootstrap is a free, open-source CSS framework that simplifies your web development process by allowing you to use templates that people have already created!",
          link: "/bootstrap",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container{
  width: 95%;
}
h2 {
  font-weight: bold;
  color: var(--nav-link-color);
}
.sub-text {
  margin-left: 20px;
}
.title-row {
  color: var(--text-color);
}
.card {
  margin-left: 5px;
  margin-right: 5px;
  padding: 0;
  transition: 0.3s;
  max-width: 90%;
  background-color: var(--nav-color);
}
.card:hover {
  transform: translateY(-5px);
}
.card-body {
  padding: 0;
}
.card-text {
  padding: 15px;
}

ul {
  list-style: none;
}
.cursor-default {
  cursor: default;
}

.card-title {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255,255,255, 0.8);;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius:3px;
}

.buffer-text {
  font-size: 35px;
  font-family: "Press Start 2P", cursive;
  margin: auto;
  text-align: center;
  color: var(--nav-link-color);
}
.image-space {
  border-radius: 25px;
  display: flex;
  align-items: center;
  border: 10px solid var(--nav-link-color);
}
.line {
  animation: cursorBlink 800ms steps(40) infinite normal;
}

@keyframes cursorBlink {
  from {
    color: var(--nav-selectedlink-color);
  }
  to {
    color: var(--drop-down-nav-color);
  }
}

a{
  text-decoration: none;
  color: var(--nav-link-color);
  transition:0.1s;
}
a:hover{
  color: var(--nav-selectedlink-color);
}

@media screen and (max-width:767px){
  .card{
    margin:auto;
    max-width: 90%;
    margin-top: 15px;
  }
}

</style>
