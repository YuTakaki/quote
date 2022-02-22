<template>
  <Button @btnClick="$emit('getRandomQuote')" text="Random"/>
  <div>
    <h2>{{randomQuote.content}}</h2>
    <p>-{{randomQuote.author}}</p>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  props : {
    randomQuote : Object
  },
  components : {
    Button
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
  background-color: aquamarine;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px gray;
  margin-top: 30px;
}
p{
  align-self: flex-end;
}

button{
  margin-left: 50%;
  transform: translateX(-50%);
}

</style>