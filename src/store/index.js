import { createStore } from 'vuex'
import { authorsStore } from './modules/authors'
import { quotesStore } from './modules/quotes'
import { randomQuotesStore } from './modules/randomQuotes'

export default createStore({
  modules: {
    randomQuotesStore: randomQuotesStore,
    authorsStor: authorsStore,
    quotesStore: quotesStore,
  }
})
