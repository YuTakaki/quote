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