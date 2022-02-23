<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/authors">Authors</router-link> |
    <router-link to="/quotes">Quotes</router-link>
  </nav>
  <router-view 
    :quotes="quotes"
    @getAuthors="getAuthors"
    @getAllQuotes="getAllQuotes"
    @searchAuthor="searchAuthor"
    @searchQuotes="searchQuotes"
  />
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
  data() {
    return {
      quotes : {
        allQuotes : [],
        page: 0,
      }
    }
  },
  created() {
    this.$store.dispatch('getRandomQuote')
    this.$store.dispatch('getAuthors')
    this.getAllQuotes();
  },
  methods : {
    async searchAuthor(value) {
      try {
        this.authors.page = 0;
        const authors = await axios.get(`http://api.quotable.io/search/authors?query=${value}`);
        this.authors.allAuthors = authors.data.results;
      } catch (error) {
        this.authors.allAuthors = [];
        
      }
    },
    async searchQuotes(value) {
      try {
        const quotes = await axios.get(`http://api.quotable.io/search/quotes?query=${value}`);
        this.quotes.page = 0;
        this.quotes.allQuotes = quotes.data.results
      } catch (error) {
        this.quotes.allQuotes = [];
        
      }
    },
    

    async getAllQuotes() {
      try {
        if(this.page === 0) {
          this.quotes.allQuotes = [];
        }
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
