const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy : 'https://goquotes-api.herokuapp.com/api/v1'
  }
})
