import {TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MOVIE} from '../utils/routes';

const MovieCard = ({movie}) => {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MOVIE, {id: movie.id})}>
      <Image
        className="rounded-3xl"
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
