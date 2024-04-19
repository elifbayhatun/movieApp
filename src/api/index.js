import {request} from '../utils/request';

export const getTrendingMovies = () =>
  request.get(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  );
export const getUpComingMovies = () =>
  request.get('https://api.themoviedb.org/3/movie/upcoming?language=en');

export const getNowPlaying = () => {
  return request.get(
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  );
};
export const getMovieDetail = id => {
  return request.get(`https://api.themoviedb.org/3/movie/${id}language=en-US`);
};
export const getMovieCredits = id => {
  return request.get(
    `https://https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
  );
};
