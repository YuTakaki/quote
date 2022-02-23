<template>
  <main>
    <Form @onSubmit="(value) => $emit('searchAuthor', value)" placeholder="search authors"/>
    <ul>
      <li v-bind:key="author._id" v-for="author in $store.getters.authors">
        <router-link :to="`/authors/${author.slug}`">
          <h2>{{author.name}}</h2>
          <p>{{author.description}}</p>
        </router-link>
      </li>
    </ul>
    <Button @btnClick="$store.dispatch('getAuthors')" text="Load More Authors"/>
  </main>
  
</template>


<script>

import Button from "../components/Button.vue";
import Form from "../components/Form.vue";

export default {
  props : {
    authors : Object
  },
  components : {
    Button,
    Form
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li{
    margin: 10px;
    background-color: aquamarine;
    padding: 5px 10px;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    box-shadow: 1px 1px 3px gray;
    cursor: pointer;
    h2{
      margin-bottom: 20px;
    }
    a{
      text-decoration: none;
      color: black;
    }
  }
  padding-bottom: 20px;
}

@media only screen and (min-width: 600px) {
  li{
    width: max-content !important;
  }

}
</style>