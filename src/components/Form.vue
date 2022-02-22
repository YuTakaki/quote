<template>
  <form @submit="onSubmit">
    <input type="search" :placeholder="placeholder" v-model="search" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      search : ''
    }
  },
  props: {
    placeholder: String
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
      this.$emit("onSubmit", this.search.trim());
      this.search = ""
    }
  }
}
</script>

<style lang="scss" scoped>
form{
  width: 100%;
  margin: auto;
  max-width: 600px;
  input{
    width: 100%;
    padding: 10px;
    border: 1px solid rgb(189, 189, 189);
    outline: none;
    border-radius: 4px;
    box-shadow: 1px 1px 3px gray;
  }
}
</style>