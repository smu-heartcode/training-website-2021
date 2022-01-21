<template>
  <div class="container mt-5">
    <h1>Projects</h1>
    <p>
      Here are the projects done by the students!
    </p>
    <hr />
    <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2  g-2  ">
      <div class="col mt-5" v-for="student in students" :key="student">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ student.name }}</h5>
            <p class="card-text"><span><b>Assisted By: </b>{{student.mentor}}</span></p>
            <!-- <p class="card-text">Coming soon</p> -->
            <a :href="`${publicPath}${student.projectLink}`" class="mt-auto" target="_blank"
              ><button class="btn learn-more">Learn More!</button></a
            >
              <!-- <button class="btn learn-more pending">Coming soon</button> -->
            </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        students:[
          {
            name:"Ang Pei Xian",
            mentor: "Jeffery Lau",
            projectLink: "Mentees/run5/Ang Pei Xian/index.html"
          },
          {
            name:"Dennis How Ming Xuan",
            mentor: "Sylvia Goh",
            projectLink: "Mentees/run5/Dennis How Ming Xuan/index.html"
          },
          {
            name:"Fan Ming Yin",
            mentor: "Charis Chin",
            projectLink: "Mentees/run5/Min Yin/index.html"
          },
          {
            name:"Goh Si Ying",
            mentor: "Phoenikelly Yong",
            projectLink: "Mentees/run5/Si Ying/index.html"
          },
          {
            name:"Ho Zhi Yi Ashley",
            mentor: "Euodia Tan",
            projectLink: "Mentees/run5/Ashley/ahelpinghand.html"
          },
          {
            name:"Isaac Ong Kay Chun",
            mentor: "Rusydiah Binte Rosle",
            projectLink: "Mentees/run5/Isaac/index.html"
          },
          {
            name:"Johnathan Lim Zhi Wei",
            mentor: "Lim Dao Yong",
            projectLink: "Mentees/run5/Johnathan Lim Zhi Wei/index.html"
          },
          {
            name:"Lee Wen Jing Larisa",
            mentor: "Rose Lin",
            projectLink: "Mentees/run5/Larisa/hopehaven.html"
          },
          {
            name:"Leong Song Hui",
            mentor: "Ong Guang Qi",
            projectLink: "Mentees/run5/Songhui/index.html"
          },
          {
            name:"Li Peixian, Bernice",
            mentor: "Lim Yin Shan",
            projectLink: "Mentees/run5/Bernice/index.html"
          },
          {
            name:"Lim Fu Jie",
            mentor: "Too Min Jay",
            projectLink: "Mentees/run5/Fu jie/index.html"
          },
          {
            name:"Pang Chi Ling",
            mentor: "Louise Angeline Christie",
            projectLink: "Mentees/run5/Pang Chi Ling/index.html"
          },
          {
            name:"Pei Joon Yi",
            mentor: "Jerome Goh",
            projectLink: "Mentees/run5/Joon yi/index.html"
          },
          {
            name:"Pek Feng Yuan Jack",
            mentor: "Tan Yi Peng",
            projectLink: "Mentees/run5/Pek Feng Yuan Jack/index.html"
          },
          {
            name:"Rain Tan Yin",
            mentor: "Caslyn Phang",
            projectLink: "Mentees/run5/Rain/index.html"
          },
          {
            name:"Seem Yong En",
            mentor: "James Teo",
            projectLink: "Mentees/run5/Seem Yong En/index.html"
          },
          {
            name:"Shirlyn Lim",
            mentor: "Jess Toh",
            projectLink: "Mentees/run5/Shirlyn Lim/index.html"
          },
          {
            name:"Tan Yong Sheng",
            mentor: "Paul Soh",
            projectLink: "Mentees/run5/Yong Sheng/index.html"
          },
          {
            name:"Toh Ming Zhen",
            mentor: "Teh Xue Er",
            projectLink: "Mentees/run5/Ming Zhen/index.html"
          },
          {
            name:"Yee Cheng Fai",
            mentor: "Wong Jie Peng",
            projectLink: "Mentees/run5/Yee Cheng Fai/index.html"
          },
        ],
        publicPath: process.env.BASE_URL,
      }
    }
  }
  
</script>
<style scoped>
  h1,
  h6 {
    font-family: "Press Start 2P", cursive;
    color: var(--nav-link-color);
  }

  .learn-more{
    max-width: fit-content;
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

  .card-body {
    padding: 0;
  }

  .card-text {
    padding: 15px;
  }

  .card {
    padding: 0;
    transition: 0.3s;

    background-color: var(--nav-color);
  }
  .card:hover {
    transform: translateY(-5px);
  }

  .pending{
    background-color: rgba(0,0,0,0.5);
  }

@media screen and (max-width:767px){
  .card{
    margin:auto;
    max-width: 90%;
    margin-top: 15px;
  }
}
</style>