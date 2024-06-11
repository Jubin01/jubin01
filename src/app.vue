
<template>
  <nav :class="{ active: isActive }">
    <router-link @click="activateNav" to="/portfolio">Portfolio</router-link> |
    <!-- <router-link to="/drumming">Drumming</router-link> | -->
    <!-- <router-link to="/tictactoe">Tic tac toe</router-link> | -->
    <router-link to="/notes">Notes</router-link> |
    <router-link to="/blog">Blog</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import sound from '/public/sound.mp3';
//const sound = await import("../../public/img/icons/");
//console.log(sound);

@Options({
  components: {
    
  },
  props: {
    },
    data: () => {
        return {
            
        }
    }
})
export default class App extends Vue { 

  isActive!:any;
  activateNav(){
    this.isActive = true;
  }
}
</script>

<style lang="scss">
body {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(2, 133, 161, 1) 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;

  background:#d9e4fc;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

#app>div {
  margin-left: 20%;
}

.active{
  padding: 30px;
}

nav {
  padding: 30px;
  // position: fixed;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 14px 25px;
    border: 1px solid white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
