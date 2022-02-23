import { createStore } from 'vuex'
import { authorsStore } from './modules/authors'
import { randomQuotesStore } from './modules/randomQuotes'

export default createStore({
  modules: {
    randomQuotesStore: randomQuotesStore,
    authorsStor: authorsStore
  }
})
