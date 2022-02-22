<template>
  <main>
    <QuoteCard v-bind:key="quote._id" v-for="quote in quotes.allQuotes" :randomQuote="quote"/>
    <Button @btnClick="$emit('getAllQuotes')" text="View more quotes" />
  </main>
  
</template>

<script>
import QuoteCard from "../components/QuoteCard.vue";
import Button from "../components/Button.vue"

export default {
  props : {
    quotes : Object
  },
  components : {
    QuoteCard,
    Button,
  },

  created(){
    this.$emit('getAllQuotes')
  }
  
}
</script>