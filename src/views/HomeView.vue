<template>
  <button @click="randomQuote">Random</button>
  <div>
    <h2>{{content}}</h2>
    <p>-{{author}}</p>
  </div>
</template>

<script>

import axios from "axios"
export default {
  data() {
    return {
      content : '',
      author : '',
    }
  },
  created() {
    this.randomQuote()
  },
  methods : {
    async randomQuote(){
      try {
        const randomQuote = await axios.get('http://api.quotable.io/random');
        const {content, author} = randomQuote.data;
        this.content = content;
        this.author = author;
      } catch (error) {
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  width : 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
p{
  align-self: flex-end;
}

button{
  margin-left: 50%;
  transform: translateX(-50%);
}

</style>