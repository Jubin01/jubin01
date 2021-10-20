<template>
  <h1>Current Player: {{ playervar }}</h1>

  <button v-on:click="newGame()">Start new Game (Safer to refresh the page)</button>

  <h2>Player {{ winner }} won the game!</h2>
  <main>
    <Square
      class="square"
      v-for="(value,index) in squares"
      :value="value"
      :key="index"
      v-on:click="makeMove(index)"
    />
    <!-- <Square v-for="val in squares" :key="val.index" value="val" v-on:click="makeMove"/> -->
  </main>
</template>

<script src="./board.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./board.scss" scoped lang="scss">
</style>