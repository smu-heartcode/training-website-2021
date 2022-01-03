<template>
  <div class="container mt-5">
    <h1>HTML & CSS</h1>
    <p>The two main technologies for building a webpage!</p>
    <hr />
    <h6>Slide:</h6>
    <div class="slide-align">
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTzL7M-qciSCQqdXAc4SHJjQO_-dV_CHMZDDvlKIVwfuEXTPuyZqGSKU1yCgO1yuXHriAkl_JTOjspR/embed?start=false&loop=false&delayms=10000"
        frameborder="0"
        width="80%"
        height="500"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
    <hr />
    <h6>Exercises:</h6>
    <div class="row">
      <div class="col-md-3">
        <a href="https://drive.google.com/uc?id=19jOVmBR0ueMSyUTAPj5xoQwG-DR6okFN&export=download">
          <button class="btn learn-more">Download!</button>
        </a>
        <a href="https://drive.google.com/uc?id=1jx7cj3DJ8xmrJgIJtngXd9s9l5cU0twK&export=download">
          <button class="btn learn-more">Completed Ex.</button>
        </a>
      </div>
    </div>
    <hr/>
    <h6>Code Snippets:</h6>

    <h1 class="snippet-header">HTML</h1>
    
    <div class="row"  v-for="codeSnippets in codes" :key="codeSnippets">
      <div class="code-title"><h6>{{codeSnippets.title}}</h6></div>
      <div class="col-md-6">
        <Snippets :code="codeSnippets.code" />
      </div>
      <div class="col-md-6">
        <span v-html="codeSnippets.code"></span>
      </div>
      <hr/>
    </div>
    <h1 class="snippet-header">CSS</h1>
    <div class="row">
      <div class="col-md-4 mt-5" v-for="codeSnippets in cssCodes" :key="codeSnippets">
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
          title: "Headers",
          code: ` <h1>Header 1</h1>\n <h2>Header 2</h2>\n <h3>Header 3</h3>\n <h4>Header 4</h4>\n <h5>Header 5</h5>\n <h6>Header 6</h6>`,
        },
        {
          title: "Text",
          code: ` <p>This is a p-tag and i just <br> broke it in 2 </p>`,
        }, 
        {
          title: "Text emphasis",
          code: ` <b>b tag bolds the text</b><br/>\n <strong>strong tag indicates this has importance</strong><br/>\n <i>i tag italicises the text</i><br/>\n <em>em tag emphasizes the text</em><br/>\n <mark>mark tag highlights this text</mark>`,
        },
        {
          title: "Ordered List",
          code: ` <ol>\n   <li>ol stands for</li>\n   <li>ordered list</li>\n   <li>in the ol tag</li>\n   <li>it nests the li tag</li>\n   <li>which defines the list items</li>\n </ol>`,
        },
        {
          title: "Unordered List",
          code: ` <ul>\n   <li>ul stands for</li>\n   <li>unordered list</li>\n   <li>in the ul tag</li>\n   <li>it nests the li tag</li>\n   <li>which defines the list items</li>\n </ul>`,
        },  
        {
          title: "Tables",
          code: ` <table border = "1">\n   <tr>\n     <th>th</th>\n     <th>stands for</th>\n     <th>table header</th>\n   </tr>\n   <tr>\n     <td>tr</td>\n     <td>stands for</td>\n     <td>table row</td>\n   </tr>\n   <tr>\n     <td>td</td>\n     <td>stands for</td>\n     <td>table data</td>\n   </tr>\n   <tr>\n     <td colspan = "2">I can span across columns by doing</td>\n     <td>colspan = "number"</td>\n   </tr>\n     <td rowspan = "2">Same for rows by doing rowspan ="number"</td>\n     <td>hello</td>\n     <td>Hello</td>\n   </tr>\n   <tr>\n     <td>hello</td>\n \n     <td>Hello</td>\n   </tr>\n </table>`,
        },
        {
          title: "Links",
          code: ` <p>The a tag creates a link, and href points to the address, <a href="https://google.com">this</a> link sends you to google</p>`,
        },  
        {
          title: "Images",
          code: ` <p>An image can be shown either from your computer, or from the internet, for this example, I will display an image from the internet</p>\n <img src ="https://pics.me.me/when-you-start-working-as-a-programmer-google-how-to-47677992.png" width="100%"/>\n <p>You can link it to a local file by changing the path in src</p>`,
        },  
        {
          title: "Input - Text",
          code: ` <p>This is a text input</p>\n <input type ="text">\n <p>This is a number input</p>\n <input type ="number">\n <p>This is a password input</p>\n <input type ="password">`,
        },  
        {
          title: "Input - Radio button",
          code: ` <p>This is a radio button, you can select only one and the name dictates which "group" the radio button belongs to</p>\n\n <input type="radio" id="select" name="test" value="select">\n <label for="select">select</label><br>\n <input type="radio" id="only" name="test" value="only">\n <label for="only">only</label><br>\n <input type="radio" id="one" name="test" value="one">\n <label for="one">one</label>`,
        },
        {
          title: "Input - Checkbox",
          code: ` <p>This is a checkbox, multiple selection is allowed</p>\n\n <input type="checkbox" id="multi" name="multi" value="1">\n <label for="multi"> multi </label><br>\n <input type="checkbox" id="selection" name="selection" value="2">\n <label for="selection"> selection </label><br>\n <input type="checkbox" id="allowed" name="allowed" value="3">\n <label for="allowed"> allowed</label><br>`,
        },
        {
          title: "Input - Dropdown",
          code: ` <p>This is a dropdown list</p>\n <select>\n   <option>1</option>\n   <option>2</option>\n   <option>3</option>\n </select>`,
        },
        {
          title: "Input - Button",
          code: ` <p>This is a button</p>\n <button>BUTTON!</button>`,
        },
      ],
      cssCodes: [
        {
          title: "Selectors",
          code: " //tags\n p{\n    color:red;\n }\n\n //selects classes with '.' followed by the class name\n.class-selector{\n   color:green;\n }\n\n //selects ids with '#' followed by the id name\n #id-selector{\n   color:purple;\n }"
        },
        {
          title: "Box Model",
          code: " //margin->border->padding->content\n .box-model{\n   border:5px solid black;\n   margin:50px;\n   padding:50px;\n }"
        },
        {
          title: "Background images",
          code: ` body{\n   background-image:url("insert url/filepath here");\n   background-size:contain;\n   background-repeat:no-repeat;\n }\n //what other properties of background-size \n //or background repeat are there?`
        },
        {
          title: "Box shadow",
          code: ` //Box shadow \n //(Horizontal, vertical offset, blur radius, color)\n .shadow-box{\n   border:1px solid maroon;\n   height:100px;\n   width:100px;\n   box-shadow: 5px 5px 5px black;\n }`
        },
        {
          title: "Hover",
          code: ` //transition-> how long it takes to achieve \n //what is defined in :hover selector\n .hover-box{\n   margin: auto;\n   border: 1px solid maroon;\n   height:100px;\n   width:100px;\n   box-shadow:1px 1px 50px black;\n   transition:0.5s;\n }\n\n .hover-box:hover{\n   transform:translateY(-15px);\n }`
        },
        {
          title: "CSS Variables",
          code: ` //declaring variable in root\n :root{\n   --navigation-color:red;\n }\n\n //using the variable\n .nav-bar{\n   background-color:var(--navigation-color);\n }`
        }
      ]
    };
  },
  components:{
    Snippets
  },
  mounted(){
    PR.prettyPrint();
  }
};
</script>
<style scoped>
h1,
h6 {
  font-family: "Press Start 2P", cursive;
  color: var(--nav-link-color);
}
:deep(table) { 
  border: 1px outset var(--text-color);
  padding: 1px 
}

:deep(td,th) { 
  border: thin inset var(--text-color);
  margin: 1;
}
:deep(th) { 
  border: thin inset var(--text-color);
  margin: 1;
}
hr{
  margin-top:20px;
}
.snippet-header{
  color:var(--text-color);
}
:deep(h2){
  color: var(--text-color);
  font-weight:normal;
}

</style>
