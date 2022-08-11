<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App + lo fi games + drums" />
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
 export default class Home extends Vue {}
</script>
