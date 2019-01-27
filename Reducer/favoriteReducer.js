function toggleFavorite(state, action) {
  const initialState = { favoritesFilm: [] };

  function toggleFavorite(state = initialState, action) {
    let nextState;
    switch (action.type) {
      case "TOGGLE_FAVORITE":
        return nextState;
      default:
        return state;
    }
  }
}
