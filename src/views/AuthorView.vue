<template>
  <ul>
    <li v-bind:key="author._id" v-for="author in allAuthors">
      <h2>{{author.name}}</h2>
      <p>{{author.description}}</p>
    </li>

  </ul>
  
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      allAuthors : [],
      page: 0,
    }
  },
  methods: {
    async getAuthors(){
      try {
        this.page++;
        const authors = await axios.get(`http://api.quotable.io/authors?page=${this.page}`);
        this.allAuthors = [...this.allAuthors, ...authors.data.results];
        console.log(this.allAuthors)
      } catch (error) {
        console.log(error)
        
      }
    }
  },
  async created(){
    this.getAuthors();
  }
}
</script>