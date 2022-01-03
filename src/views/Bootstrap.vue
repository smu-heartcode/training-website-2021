<template>
  <div class="container mt-5">
    <h1>Bootstrap</h1>
    <p>
      An open source CSS framework for you to use, speeding up your web development
      process!
    </p>
    <hr />
    <h6>Slide:</h6>
    <div class="slide-align">
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTpCdDx65IHsppeKw0p7jdH_24RWmQPE2XX40Dr6z-Rt7sjCd2aX67DFPFCXxXbF5uq-R7HcLtt-WJB/embed?start=false&loop=false&delayms=10000"
        frameborder="0"
        width="80%"
        height="500"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
    <hr/>
    <h6>Exercises:</h6>
    <div class="row">
      <div class="col-md-3">
        <a href="https://drive.google.com/uc?id=1mf84nRitse0JxiGXM6_VQriyBXC7QmwL&export=download">
          <button class="btn learn-more">Download!</button>
        </a>

        <a href="https://drive.google.com/uc?id=1TZ3o0BhGcsnJwm8vDd6ZysqDFqqgkGsn&export=download">
          <button class="btn learn-more">Completed Ex.</button>
        </a>
      </div>
    </div>
    <hr/>
    <h6>Links to resources:</h6>
    
    <div class="row  mt-5">
      <div class="col-lg-4" v-for="resource in resources" :key="resource">
        <a :href="resource.link" target="_blank">
          <button class="btn learn-more">
            {{resource.title}}
          </button>
        </a>
      </div>
    </div>

    <hr/>
    <h6>Code Snippets (ScrollsSpy implementation):</h6>
    <div class="row">
      <div class="col-md-4 mt-5" v-for="codeSnippets in codes" :key="codeSnippets">
        <h6>{{codeSnippets.title}}</h6>
        <Snippets :code="codeSnippets.code" />
      </div>
    </div>

  </div>
</template>
<script>
import Snippets from "../components/Snippets";
export default {
  data(){
    return{
      resources:[
        {
          title:"Getting Started",
          link:"https://getbootstrap.com/docs/5.1/getting-started/introduction/"
        },
        {
          title:"Buttons",
          link:"https://getbootstrap.com/docs/4.0/components/buttons/"
        },
        {
          title:"Container",
          link:"https://getbootstrap.com/docs/4.0/layout/grid/"
        },
        {
          title:"Navigation bar",
          link:"https://getbootstrap.com/docs/5.1/components/navbar/"
        },
        {
          title:"ScrollSpy",
          link:"https://getbootstrap.com/docs/5.0/components/scrollspy/"
        },
        {
          title:"Jumbotron",
          link:"https://getbootstrap.com/docs/4.0/components/jumbotron/"
        },
        {
          title:"Carousel",
          link:"https://getbootstrap.com/docs/5.1/components/carousel/"
        },
        {
          title:"Modal",
          link:"https://getbootstrap.com/docs/5.1/components/modal/"
        },
        {
          title:"Cards",
          link:"https://getbootstrap.com/docs/5.1/components/card/"
        },
      ],
      codes:[
        {
          title:"CSS",
          code: ` body{\n   position:relative;\n }`,
        },
        {
          title:"Body Tag",
          code: ` //data-bs-target -> links to the navbar's id \n //play around with data-bs-offset's value to achieve the results you want
          \n <body id="page-top" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="500" class="scrollspy-example" tabindex="0">`,
        },
      ]
    }
  },
  components:{
    Snippets,
  },
  mounted() {
    PR.prettyPrint();
  },
};
</script>
<style scoped>
h1,
h6 {
  font-family: "Press Start 2P", cursive;
  color: var(--nav-link-color);
}
</style>
