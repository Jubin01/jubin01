<template>
  <div class="tictactoe">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>a tictactoe game?</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Board from "@/components/board/board.vue"; // @ is an alias to /src


export default class Home extends Vue {}
</script>