<template>
  <div class="tictactoe">
    <Board/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Board from "@/components/board/board.vue"; // @ is an alias to /src
@Options({
  components: {
    Board
  },
})

export default class TicTacToe extends Vue {}
</script>