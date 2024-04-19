import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Color} from '../styles/color';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../components/logo';
import {useNavigation} from '@react-navigation/native';
import {SEARCH} from '../utils/routes';
import TrendingMovies from '../components/TrendingMovies';
import {useDispatch, useSelector} from 'react-redux';
import UpComingList from '../components/UpComingList';
import {GetNowPlaying, GetUpComingLists} from '../app/movieAction';
import {getUpcomingState, getnowplaying} from '../app/movieSelector';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUpComingLists());
    dispatch(GetNowPlaying());
  }, [dispatch]);

  const upComingList = useSelector(getUpcomingState());
  const nowplaying = useSelector(getnowplaying());

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Icon name="menu" size={30} color={Color.BLUE} />
        <Logo />
        <TouchableOpacity onPress={() => navigation.navigate(SEARCH)}>
          <Icon name="search" size={30} color={Color.BLUE} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TrendingMovies />
        <UpComingList title="Upcoming" data={upComingList} />
        <UpComingList title="Now Playing" data={nowplaying} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
