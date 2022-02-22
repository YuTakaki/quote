<template>
  <button @click="$emit('btnClick')">{{text}}</button>
</template>

<script>
export default {
  props : {
    onClick : String, 
    text: String
  }
}
</script>


<style lang="scss" scoped>
button{
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>