<template>
  <main>
    <section id="profile">
      <h1>{{profile.name}}</h1>
      <div>
        <h4>{{profile.description}}</h4>
        <p>{{profile.bio}}</p>
      </div>
    </section>
    <section>
      <QuoteCard v-bind:key="quote._id" v-for="quote in profile.quotes" :randomQuote="quote"/>
    </section>
  </main>
  
</template>

<script>
import axios from 'axios'
import QuoteCard from '../components/QuoteCard.vue'

export default {
  data(){
    return {
      profile : {}

    }
  },
  components : {
    QuoteCard
  },

  async created() {
    const authorDetails = await axios.get(`http://api.quotable.io/authors?slug=${this.$route.params.slug}`);
    const authorQuotes = await axios.get(`http://api.quotable.io/quotes?author=${this.$route.params.slug}`);
    this.profile = authorDetails.data.results[0];
    this.profile = {
      ...this.profile,
      quotes : authorQuotes.data.results
    }
      console.log(this.profile)
  }
}
</script>

<style lang="scss" scoped>
main{
  #profile{
    max-width: 600px;
    margin: auto;
    h1{
      width: 70%;
    }

  }
}
</style>