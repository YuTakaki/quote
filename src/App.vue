<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/authors">Authors</router-link> |
    <router-link to="/quotes">Quotes</router-link>
  </nav>
  <router-view />
</template>

<script>

export default {
  created() {
    this.$store.dispatch('getRandomQuote')
    this.$store.dispatch('getAuthors')
    this.$store.dispatch('getAllQuotes')
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1080px;
  margin: auto;
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main{
  padding: 10px;
}
nav {
  padding: 30px;
  margin: auto;
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
