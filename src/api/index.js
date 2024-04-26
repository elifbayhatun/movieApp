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
export const getPersonDetail = id => {
  return request.get(
    `https://https://api.themoviedb.org/3/person/${id}/language=en-US`,
  );
};
export const getMovieCreditsPerson = id => {
  return request.get(
    `https://https://api.themoviedb.org/3/person/${id}/movie_credits??language=en-US`,
  );
};
export const fallbackMoviePoster =
  'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';

export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

export const getSearhMovies = query => {
  return request.get(`/search/movie?query=${query}`);
};
