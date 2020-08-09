import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 31,
    backgroundColor: '#EEE'
  },

  profileInfo: {
    marginLeft: 16
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264D',
    fontSize: 20
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 12,
    marginTop: 4
  }
});

export default styles;