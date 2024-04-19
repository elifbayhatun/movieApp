import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import BackAndFavorite from '../components/BackAndFavorite';
import {getmoviedetail, getmoviecredits} from '../app/movieSelector';
import {GetMovieCretit, GetMovieDetail} from '../app/movieAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../styles/color';

const MovieScreen = () => {
  const {id} = useRoute().params.id;
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    dispatch(GetMovieDetail(id));
    dispatch(GetMovieCretit(id));
  }, [id, dispatch]);

  const movieDetailSelector = useSelector(getmoviedetail());
  const movieCretitSelector = useSelector(getmoviecredits());

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Color.WHITE,
      }}>
      <ScrollView>
        <BackAndFavorite />
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetailSelector.poster_path}`,
          }}
          style={{
            width: width,
            height: height * 0.65,
            borderRadius: 10,
            padding: 9,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            color: Color.BLUE,
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          {movieDetailSelector?.title}
        </Text>
        <Text
          style={{
            color: Color.BLUE,
            fontWeight: 'bold',
          }}></Text>
        <Text style={{color: Color.BLUE, paddingVertical: 6, marginTop: 5}}>
          {movieDetailSelector?.overview}
        </Text>
        <Text style={{color: Color.BLUE, fontSize: 16, fontWeight: 'bold'}}>
          CAST
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movieCretitSelector}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
                    }}
                    style={{
                      width: width * 0.2,
                      height: height * 0.1,
                      borderRadius: 50,
                      margin: 4,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        color: Color.ORANGE,
                      }}>
                      {item.name.length > 10
                        ? item.name.slice(0, 10) + '...'
                        : item.name}
                    </Text>
                    <Text
                      style={{
                        color: Color.ORANGE,
                        fontSize: 11,
                        left: 10,
                      }}>
                      {item.character.length > 10
                        ? item.character.slice(0, 10) + '...'
                        : item.character}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
