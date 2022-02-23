import axios from "axios";

export const authorsStore = {
  state: {
    allAuthors : [],
    page: 0,
  },
  getters: {
    authors : (state) => state.allAuthors
  },
  actions: {
    async getAuthors({state}){
      try {
        if(state.page === 0) {
          state.allAuthors = [];
        }
        state.page++;
        const authors = await axios.get(`http://api.quotable.io/authors?page=${state.page}`);
        state.allAuthors = [...state.allAuthors, ...authors.data.results];
        console.log(state)
      } catch (error) {
        console.log(error)
      }
    },
  },
}