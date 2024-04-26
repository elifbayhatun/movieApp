import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getMovieDetail,
  getNowPlaying,
  getTrendingMovies,
  getUpComingMovies,
  getMovieCredits,
  getPersonDetail,
  getMovieCreditsPerson,
  getSearhMovies,
} from '../api';
import {
  setMovieDetailReducer,
  setNowPlayingReducer,
  setTrendingState,
  setUpComingState,
  setMovieCreditReducer,
  setPersonDetailReducer,
  setPersonMovieCreditsReducer,
  setSearchResultsReducer,
} from './movieSlice';

export const GetTrendingMovies = createAsyncThunk(
  'movie/getTrendingMovies',
  async (_, {dispatch}) => {
    const response = await getTrendingMovies();
    dispatch(setTrendingState(response.results));
  },
);

export const GetUpComingLists = createAsyncThunk(
  'movie/getUpComingMovies',
  async (_, {dispatch}) => {
    const response = await getUpComingMovies();
    dispatch(setUpComingState(response.results));
  },
);

export const GetNowPlaying = createAsyncThunk(
  'movie/getNowPlaying',
  async (_, {dispatch}) => {
    const response = await getNowPlaying();
    dispatch(setNowPlayingReducer(response.results));
  },
);
export const GetMovieDetail = createAsyncThunk(
  'movie/getMovieDetail',
  async (id, {dispatch}) => {
    const response = await getMovieDetail(id);
    dispatch(setMovieDetailReducer(response));
  },
);
export const GetMovieCretit = createAsyncThunk(
  'movie/getMovieCredits',
  async (id, {dispatch}) => {
    const response = await getMovieCredits(id);

    dispatch(setMovieCreditReducer(response.cast));
  },
);
export const GetPersonDetail = createAsyncThunk(
  'movie/getPersonDetail',
  async (id, {dispatch}) => {
    const response = await getPersonDetail(id);

    dispatch(setPersonDetailReducer(response));
  },
);
export const GetPersonMovieCredits = createAsyncThunk(
  'movie/getMovieCreditsPerson',
  async (id, {dispatch}) => {
    const response = await getMovieCreditsPerson(id);

    dispatch(setPersonMovieCreditsReducer(response.cast));
  },
);
export const GetSearchResuts = createAsyncThunk(
  'movie/getSearhMovies',
  async (id, {dispatch}) => {
    const response = await getSearhMovies(id);

    dispatch(setSearchResultsReducer(response.results));
  },
);
