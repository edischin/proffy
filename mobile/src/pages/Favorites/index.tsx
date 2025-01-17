import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {  
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites')
      .then(res => {
        if (res) {
          const favoritedTeachers = JSON.parse(res);
          setFavorites(favoritedTeachers);
        }
      });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos' />
      
      <ScrollView style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        {favorites.map((teacher:Teacher) => {
          return (
            <TeacherItem key={teacher.id} 
              teacher={teacher} favorited
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;