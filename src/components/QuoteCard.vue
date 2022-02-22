<template>
  <div>
    <h2>{{randomQuote.content}}</h2>
    <p>-{{randomQuote.author}}</p>
  </div>
</template>

<script>

export default {
  props : {
    randomQuote : Object
  },
}
</script>


<style lang="scss" scoped>
div {
  width : 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
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
h2{
  text-align: center;
}



</style>