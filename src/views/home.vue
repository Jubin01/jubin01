<template>
  <div class="home">   
    <HelloWorld msg="Launchpad" />
    <div class="footer">
      Made with <img alt="Vue logo" src="../assets/logo.png" /> with ❤️
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/hello-world/hello-world.vue"; // @ is an alias to /src
//import sound from '/public/sound.mp3';
//const sound = await import("../../public/img/icons/");
//console.log(sound);

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./home.scss" scoped lang="scss">

</style>
