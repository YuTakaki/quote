<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/authors">Authors</router-link> |
    <router-link to="/quotes">Quotes</router-link>
  </nav>
  <router-view 
    :randomQuote="randomQuote"
    :authors="authors"
    :quotes="quotes"
    @getAuthors="getAuthors"
    @getAllQuotes="getAllQuotes"
    @getRandomQuote="getRandomQuote"
  />
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      randomQuote : {
        content : '',
        author : '',
      },
      authors : {
        allAuthors : [],
        page: 0,
      },
      quotes : {
        allQuotes : [],
        page: 0,
      }
    }
  },
  created() {
    this.getRandomQuote();
  },
  methods : {
    async getAuthors(){
      try {
        this.authors.page++;
        const authors = await axios.get(`http://api.quotable.io/authors?page=${this.authors.page}`);
        this.authors.allAuthors = [...this.authors.allAuthors, ...authors.data.results];
      } catch (error) {
        console.log(error)
        
      }
    },
    async getRandomQuote(){
      try {
        const randomQuote = await axios.get('http://api.quotable.io/random');
        const {content, author} = randomQuote.data;
        this.randomQuote.content = content;
        this.randomQuote.author = author;
      } catch (error) {
        console.log(error);
      }
    },

    async getAllQuotes() {
      try {
        this.quotes.page++;
        console.log('sdasdasd')
        const quotes = await axios.get(`http://api.quotable.io/quotes?page=1=${this.quotes.page}`);
        this.quotes.allQuotes = [...this.quotes.allQuotes, ...quotes.data.results];
      } catch (error) {
        console.log(error);
      }
    }
  }
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
