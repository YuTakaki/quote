import axios from "axios";

export const randomQuotesStore = {
  state: {
    content : '',
    author : '',
  },
  getters: {
    randomQuote : (state) => state
  },
  actions: {
    async getRandomQuote({state}){
      try {
        const randomQuote = await axios.get('http://api.quotable.io/random');
        const {content, author} = randomQuote.data;
        state.content = content;
        state.author = author;
      } catch (error) {
        console.log(error);
      }
    },
  },
}