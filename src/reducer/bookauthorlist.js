import { createSlice } from "@reduxjs/toolkit";

export const bookauthorslice = createSlice({
  name: "bookauthorslice",
  initialState: {
    booklist: [],
    authorslist: [],
  },
  reducers: {
    setbooks: (state, action) => {
      state.booklist = action.payload;
      return state;
    },
    setauthors: (state, action) => {
      state.authorslist = action.payload;
      return state;
    },
    addauthor: (state, action) => {
      console.log(action.payload);
      state.authorslist = [...state.authorslist, action.payload];
      return state;
    },
    addbooks: (state, action) => {
      state.booklist = [...state.booklist, action.payload];
      return state;
    },

    editbook: (state, action) => {
      //   console.log("length", state.booklist.length);
      //   console.log(action.payload);
      //   console.log(state.booklist);

      const updatedlist = action.payload;

      let index = state.booklist.findIndex(
        (book) => book.id === updatedlist.id
      );
      if (index != -1) {
        state.booklist[index] = updatedlist;
      }
      //   console.log("index", index);
      //   console.log(action.payload.id);
      return state;
    },

    editauthor: (state, action) => {
      const updatedlist = action.payload;
        console.log("payload",action.payload)
      let index = state.authorslist.findIndex(
        (author) => author.id === updatedlist.id
      );
      if (index != -1) {
        state.authorslist[index] = updatedlist;
      }
      return state;
    },

    deleteauthor: (state, action) => {
        const newlist = state.authorslist.filter(
          (item) => item.id !== action.payload.id
        );
        state.authorslist = newlist;
        return state;
      },
      deletebook: (state, action) => {
        const newlist = state.booklist.filter(
          (item) => item.id !== action.payload.id
        );
        state.booklist = newlist;
        return state;
      },
  },
});

export const { setbooks, setauthors, addauthor, addbooks, editbook ,editauthor,deleteauthor,deletebook} =
  bookauthorslice.actions;
