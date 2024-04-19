import {View, Text, Image} from 'react-native';
import React from 'react';
import {Color} from '../styles/color';
import {useNavigation} from '@react-navigation/native';

const Logo = () => {
  return (
    <Text
      style={{
        color: Color.BLUE,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 25,
      }}>
      MOVIE TV
    </Text>
  );
};

export default Logo;
