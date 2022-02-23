<template>
  <main>
    <Button @btnClick="$store.dispatch('getRandomQuote')" text="Random"/>
    <QuoteCard :randomQuote="$store.getters.randomQuote"/>
    
  </main>
</template>

<script>
import Button from "../components/Button.vue";
import QuoteCard from '../components/QuoteCard.vue';

export default {
  components : {
    Button,
    QuoteCard
  }
}
</script>

