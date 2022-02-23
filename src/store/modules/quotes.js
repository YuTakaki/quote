import axios from "axios";

export const quotesStore = {
  state: {
    allQuotes : [],
    page: 0,
  },
  getters: {
    quotes : (state) => state.allQuotes
  },
  actions: {
    async searchQuotes({state}, value) {
      try {
        const quotes = await axios.get(`http://api.quotable.io/search/quotes?query=${value}`);
        state.page = 0;
        state.allQuotes = quotes.data.results
      } catch (error) {
        state.allQuotes = []; 
      }
    },
    

    async getAllQuotes({state}) {
      try {
        if(state.page === 0) {
          state.allQuotes = [];
        }
        state.page++;
        const quotes = await axios.get(`http://api.quotable.io/quotes?page=1=${state.page}`);
        state.allQuotes = [...state.allQuotes, ...quotes.data.results];
      } catch (error) {
        console.log(error);
      }
    }
  },
}