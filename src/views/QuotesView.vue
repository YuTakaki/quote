<template>
  <main>
    <Form @onSubmit="(value) => $store.dispatch('searchQuotes', value)" placeholder="search quotes"/>
    <QuoteCard v-bind:key="quote._id" v-for="quote in $store.getters.quotes" :randomQuote="quote"/>
    <Button @btnClick="$store.dispatch('getAllQuotes')" text="View more quotes" />
  </main>
  
</template>

<script>
import QuoteCard from "../components/QuoteCard.vue";
import Button from "../components/Button.vue"
import Form from "../components/Form.vue"

export default {
  props : {
    quotes : Object
  },
  components : {
    QuoteCard,
    Button,
    Form,
  },
}
</script>