import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import BackAndFavorite from '../components/BackAndFavorite';
import {useRoute} from '@react-navigation/native';
import {GetPersonDetail, GetPersonMovieCredits} from '../app/movieAction';
import {getpersondetail, getpersonmoviecredits} from '../app/movieSelector';
import {useDispatch, useSelector} from 'react-redux';
import PersonCard from '../components/PersonCard';

const PersonScreen = () => {
  const dispatch = useDispatch();
  const id = useRoute().params.id;
  useEffect(() => {
    dispatch(GetPersonDetail(id));
    dispatch(GetPersonMovieCredits(id));
  }, [id, dispatch]);
  const getPersonDetailSelector = useSelector(getpersondetail());
  const getPersonMovieCreditsSelector = useSelector(getpersonmoviecredits());
  return (
    <ScrollView style={{flex: 1}}>
      <BackAndFavorite />
      <PersonCard
        person={getPersonDetailSelector}
        personMovies={getPersonMovieCreditsSelector}
      />
    </ScrollView>
  );
};

export default PersonScreen;
