import {View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {searchStyles} from '../styles/searchStyles';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Search"
        style={searchStyles.container}></TextInput>
    </SafeAreaView>
  );
};

export default SearchScreen;
