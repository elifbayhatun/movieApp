import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Color} from '../styles/color';
import {useNavigation} from '@react-navigation/native';
import {MOVIE} from '../utils/routes';

const UpComingList = ({title, data}) => {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: Color.BLUE,
            fontWeight: 'bold',
            fontSize: 16,

            padding: 5,
          }}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              color: Color.BLUE,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(MOVIE, {id: item.id})}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={{
                  width: width * 0.33,
                  height: height * 0.22,
                  borderRadius: 10,
                  margin: 4,
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: Color.BLUE,
                  fontWeight: '500',
                  padding: 6,
                }}>
                {item.title.length > 14
                  ? item.title.slice(0, 14) + '...'
                  : item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: Color.BLUE,
                  fontWeight: '600',
                  fontSize: 12,
                  marginBottom: 14,
                }}>
                Vote: {item.vote_average}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
};

export default UpComingList;
