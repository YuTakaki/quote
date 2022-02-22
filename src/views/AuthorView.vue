<template>
  <main>
    <ul>
      <li v-bind:key="author._id" v-for="author in authors.allAuthors">
        <router-link :to="`/authors/${author.slug}`">
          <h2>{{author.name}}</h2>
          <p>{{author.description}}</p>
        </router-link>
      </li>
    </ul>
    <Button @btnClick="$emit('getAuthors')" text="Load More Authors"/>
  </main>
  
</template>


<script>
import Button from "../components/Button.vue";
export default {
  props : {
    authors : Object
  },
  components : {
    Button,
  }
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
    border-radius: 5px;
    box-shadow: 1px 1px 3px gray;
    cursor: pointer;
    a{
      text-decoration: none;
      color: black;
    }
  }
  padding-bottom: 20px;
}
</style>