
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/drumming">Drumming</router-link> | -->
    <router-link to="/tictactoe">Tic tac toe</router-link> |
    <router-link to="/notes">notes</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#app>div {
  margin-left: 20%;
}

nav {
  padding: 30px;
  // position: fixed;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
