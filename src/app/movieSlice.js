import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  upComing: [],
  nowPlaying: [],
  movieDetail: {},
  movieCredits: [],
  personDetail: {},
  personMovieCredits: [],
  searchResults: [],
  loading: false,
  error: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingState: (state, action) => {
      state.trending = action.payload;
    },
    setUpComingState: (state, action) => {
      state.upComing = action.payload;
    },

    setNowPlayingReducer: (state, action) => {
      state.nowPlaying = action.payload;
    },
    setMovieDetailReducer: (state, action) => {
      state.movieDetail = action.payload;
    },
    setMovieCreditReducer: (state, action) => {
      state.movieCredits = action.payload;
    },
    setPersonMovieCreditsReducer: (state, action) => {
      state.personMovieCredits = action.payload;
    },

    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },

    setPersonDetailReducer: (state, action) => {
      state.personDetail = action.payload;
    },
    setSearchResultsReducer: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const {
  setErrorState,
  setLoadingState,
  setTrendingState,
  setUpComingState,
  setNowPlayingReducer,
  setMovieDetailReducer,
  setMovieCreditReducer,
  setPersonDetailReducer,
  setPersonMovieCreditsReducer,
  setSearchResultsReducer,
} = movieSlice.actions;

export default movieSlice.reducer;
