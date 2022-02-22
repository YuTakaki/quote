<template>
  <main>
    <Button @btnClick="$emit('getRandomQuote')" text="Random"/>
    <QuoteCard :randomQuote="randomQuote"/>
    
  </main>
</template>

<script>
import Button from "../components/Button.vue";
import QuoteCard from '../components/QuoteCard.vue';

export default {
  props : {
    randomQuote : Object
  },
  components : {
    Button,
    QuoteCard
  }
}
</script>

