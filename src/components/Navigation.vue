<template>
  <nav>
    <input id="nav-toggle" type="checkbox" />
    <div class="logo">
      <router-link to="/"
        >HeartCode<img src="../assets/pixel-heart.gif"
      /></router-link>
    </div>
    <ul class="links">
      <li :class="navigation['about'] ? 'active' : ''">
        <router-link to="/">About</router-link>
      </li>
      <li :class="navigation['htmlcss'] ? 'active' : ''">
        <router-link to="/htmlcss">HTML & CSS</router-link>
      </li>
      <li :class="navigation['javascript'] ? 'active' : ''">
        <router-link to="/javascript">JavaScript</router-link>
      </li>
      <li :class="navigation['bootstrap'] ? 'active' : ''">
        <router-link to="/bootstrap">Bootstrap</router-link>
      </li>
      <li :class="navigation['projects'] ? 'active' : ''">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <span class="color" @click="changeTheme()">
          <i class="fa-solid fa-sun" id="theme-toggler" ></i>
        </span>
      </li>
    </ul>
    <label for="nav-toggle" class="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
  </nav>
</template>
<script>
// import M from 'minimatch'
export default {
  name: "Navigation",
  data() {
    return {
      navigation: {
        about: false,
        htmlcss: false,
        javascript: false,
        bootstrap: false,
        projects: false,
      },
    };
  },
  watch: {
    $route(to) {
      var toPath = to.path;
      document.getElementById("nav-toggle").checked = false;
      for (var item in this.navigation) {
        if (toPath === "/") {
          for (var subItem in this.navigation) {
            this.navigation[subItem] = false;
          }
          this.navigation["about"] = true;
          break;
        } else if (toPath === "/" + item) {
          this.navigation[item] = true;
        } else {
          this.navigation[item] = false;
        }
      }
    },
  },
  methods:{
    changeTheme(){
      if (!localStorage.getItem("theme")){
        localStorage.setItem("theme", "light");
        document.getElementById("theme-toggler").classList.remove("fa-sun");
        document.getElementById("theme-toggler").classList.add("fa-moon");
      }

      else if (localStorage.getItem("theme") === "light"){
        localStorage.setItem("theme", "dark");
        this.changeDark();
      }else{
        localStorage.setItem("theme", "light");
        this.changeLight();

      }
    },
    changeDark(){
      document.querySelector(":root").style.setProperty("--nav-color", "var(--dark-nav-color)");
      document.querySelector(":root").style.setProperty("--footer-color", "var(--dark-footer-color)");
      document.querySelector(":root").style.setProperty("--text-color", "var(--dark-text-color)");
      document.querySelector(":root").style.setProperty("--drop-down-nav-color", "var(--dark-dropdown-color)");
      
      document.getElementById("theme-toggler").classList.remove("fa-sun");
      document.getElementById("theme-toggler").classList.add("fa-moon");
    },
    changeLight(){
      document.querySelector(":root").style.setProperty("--nav-color", "var(--light-nav-color)");
      document.querySelector(":root").style.setProperty("--footer-color", "var(--light-footer-color)");
      document.querySelector(":root").style.setProperty("--text-color", "var(--light-text-color)");
      document.querySelector(":root").style.setProperty("--drop-down-nav-color", "var(--light-dropdown-color)");

      document.getElementById("theme-toggler").classList.add("fa-sun");
      document.getElementById("theme-toggler").classList.remove("fa-moon");
    }
  },
  mounted(){
    if (!localStorage.getItem("theme")){
      localStorage.setItem("theme", "light");
      document.getElementById("theme-toggler").classList.remove("fa-sun");
      document.getElementById("theme-toggler").classList.add("fa-moon");
    }else{
      localStorage.getItem("theme") === "light" ? this.changeLight() : this.changeDark();
    }

  }
};
</script>
<style scoped>
.color{
  margin-left: 15px;
  color: var(--nav-link-color);
}
.fa-sun{
  transition: 0.2s;
}
.fa-sun:hover{
  transform: scale(1.3);
}
img {
  height: 25px;
  margin-left: 5px;
}
nav {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 5%;
  width:100%;
  height: var(--nav-height);
  background-color: var(--nav-color);
  transition:0.3s;
}
nav .logo {
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bolder;
  /* color: var(--logo-color); */
}

nav .logo a {
  text-decoration: none;
  color: var(--logo-color);
}

nav .links {
  float: right;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
nav .links li {
  list-style: none;
}
nav .links a {
  display: block;
  padding: 1em;
  font-size: 16px;
  font-weight: bold;
  color: var(--nav-link-color);
  text-decoration: none;
  border-radius: 25px;
  padding: 15px;
  transition: 0.5s;
}
#nav-toggle {
  position: absolute;
  top: -100px;
}
nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}
nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: var(--nav-link-color);
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}
nav .links .active a {
  color: white;
  background-color: var(--nav-link-color);
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
}
nav .links a:hover {
  transform: translateY(-5px);
}
@media screen and (max-width: 768px) {

  nav .logo {
    float: none;
    width: auto;
    justify-content: center;
  }
  nav .links {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: var(--nav-height);
    bottom: 100%;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--drop-down-nav-color);
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
  }
  nav .links a {
    font-size: 20px;
  }
  nav :checked ~ .links {
    bottom: 0;
  }
  nav .icon-burger {
    display: block;
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }

}
</style>
  