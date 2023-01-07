<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/tictactoe">tic-tac-toe</router-link> |
    <router-link to="/notes">notes</router-link> |
    <router-link to="/blog">Blog</router-link>
  </div>
  <router-view />
</template>
<script>
export default {
  setup() {
    document.write("<style type='text/css'>.noscript { display: none; }</style>");
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8ab2d9;
}

body {
  background-color: black;
}

.noscript {
  color: lightgray;
}

#nav {
  padding: 30px;
 // position: fixed;

  a {
    font-weight: bold;
    color: #8ab2d9;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
