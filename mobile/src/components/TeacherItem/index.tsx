import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface TeacherItemProps {
  title?: string;
}

const TeacherItem:React.FC<TeacherItemProps> = ({ title }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/7819978?s=460&u=1e8237822a62d42e6c4a8b3c19b04224b92fd67c&v=4' }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Edwin Dischinger</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;