import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../styles/color';
import {useNavigation} from '@react-navigation/native';
import {HOME} from '../utils/routes';

const BackAndFavorite = () => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  return (
    <SafeAreaView
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
      }}>
      <TouchableOpacity
        style={{marginTop: 15}}
        onPress={() => {
          return navigation.goBack(HOME);
        }}>
        <Icon name="arrow-back-ios" size={30} color={Color.BLUE} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setLiked(isLiked => !isLiked)}
        style={{marginTop: 15}}>
        <Icon
          name={liked ? 'favorite' : 'favorite-outline'}
          size={30}
          color={Color.BLUE}
        />
        {/* <Icon name="favorite-outline" size={30} color={Color.BLUE} /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackAndFavorite;
