import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import heartOulineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

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

      <Text style={styles.bio}>
        Entusiasta das melhores tecnologias de química avançada.
        {'\n\n'} Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOulineIcon} />*/}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;