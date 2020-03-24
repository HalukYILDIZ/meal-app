export const TOOGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = id => {
  return {type: TOOGLE_FAVORITE, mealId: id};
};
