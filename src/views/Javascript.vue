<template>
  <div class="container mt-5">
    <h1>JavaScript</h1>
    <p>
      Javascript allows you to make your webpages interactive and engaging!
    </p>
    <hr />
    <h6>Slide:</h6>
    <div class="slide-align">
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vSuBGLRyzLpKcpqDh0Qb4nKZLpuCl2lfOCebO3SF8lv-u5RbQnMX1L9-kSGGO63sPczwNk7HWl-F304/embed?start=false&loop=false&delayms=10000"
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
        <a href="https://drive.google.com/uc?id=1CE8dAln7V5_OWDJcVNee0pxH0cKUg7iw&export=download">
          <button class="btn learn-more">Download!</button>
        </a>
        <a href="https://drive.google.com/uc?id=1ClXQQZNbYsyP7UPzPcstzy6NYO87_VCW&export=download">
          <button class="btn learn-more">Completed Ex.</button>
        </a>
      </div>
    </div>
    <hr/>
    <h6>Code Snippets:</h6>
    
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
  data() {
    return {
      codes: [
        {
          title:"Variable declaration",
          code: ` var x = 5 \n var y = 10 \n var z = "hello"`,
        },
        {
          title: "Array",
          code: ` var arr = ["Adam", "Alice", "Ben", "Beatrice"] \n console.log(arr[0]) // Adam \n console.log(arr[3]) // Beatrice`,
        },
        {
          title: "Operations",
          code: ` var x = 5+5 //10 \n var y = 5-5 //0 \n var z = 5*5 //25 \n var j = 5/5 //1 \n var k = 5%3 //2`
        },
        {
          title:"Comparator",
          code: ` 5===5 //true\n 5==="5" //false \n 5>=4 //true\n 5<=4 //false \n "cat" !== "cat" //false`,
        },
        {
          title:"If Else",
          code: ` var animal = "cat"\n\n if (animal === "dog"){\n   console.log("woof")\n }else if(animal === "fish"){\n   console.log("bloop")\n }else{\n   console.log("meow")\n } \n //This animal meows`,
        },
        {
          title:"For loop",
          code: ` //prints 0 to 9\n for(var i = 0; i < 10; i++){\n      console.log(i)\n }`,
        },
        {
          title: "Writing a function",
          code: ` function show(number){\n  for(var i = 0; i < number; i++){\n    console.log(i)\n  }\n }`,
        },
        {
          title: "Function call via click",
          code: ` <button onclick="show(50)"> Print number! </button>\n\n <script> \n   function show(number){\n    for(var i = 0; i <script number; i++){\n      console.log(i)\n    }\n   }\n <\/script>`,
        },
        {
          title: "Function call on change",
          code: ` <input type="checkbox" id="checkbox" onchange="iChanged()"> \n\n <script>\n   function iChanged(){\n     console.log("changed!")\n   }\n <\/script>`,
        },
        {
          title: "DOM",
          code: ` //setting new text\n document.getElementById("id-name-here").textContent = "hello"\n\n \n //getting input's values\n document.getElementById("id-name").value\n\n //setting html to first element in class "class-name-here"\n document.getElementsByClass("class-name-here")[0].innerHTML = "<h1>hi there</h1>" \n\n//checking if checkbox is checked\n document.getElementById("checkbox-id").checked \n\n //setting style property of root variable \n document.querySelector(":root").style.setProperty("--current-bg-color", black);`,
        },
        {
          title: "Adding/removing class",
          code: ` //add \n document.body.classList.add("dark") \n //remove \n document.body.classList.remove("light")`,
        }
      ],
    };
  },
  components: {
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
