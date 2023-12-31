import {createAction, createSlice} from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action){
      state.categories = action.payload
    }
  }
})

export const {setCategories} = categoriesSlice.actions;

// console.log("setCategories", setCategories.type)

// const testAction = createAction("sd")
// testAction.type
// console.log("setCategories", testAction.type)

export const categoriesReducer = categoriesSlice.reducer;