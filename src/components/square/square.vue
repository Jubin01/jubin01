<template>
  <button :data-player="value">{{ value }}</button>
  <!-- <button v-If="value == 'X'">{{ value }}</button>
  <button v-If="value == 'O'">{{ value }}</button> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import Board from "@/components/board/board.vue"; // @ is an alias to /src
@Options({
  props: {
    value: String
  },
})
export default class Square extends Vue {
  value!: string;
}
</script>

<style scoped>
button {
  /* width: 100%;
  height: 100%; */
  font-size: 2em !important;
}

button[data-player='X']{ color: darkgreen;background-color: aquamarine;}
button[data-player='O']{ color: lightcoral;background-color: blanchedalmond;}
</style>