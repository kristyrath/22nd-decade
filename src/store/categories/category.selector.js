// FOR ACCESSING THE STATE

import {createSelector} from 'reselect';

export const selectCategoriesReducer = (state) => {
  return state.categories;
}
export const selectCategories = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.categories);


export const selectIsLoading = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.isLoading);
