import {Image, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <LinearGradient colors={['#FCCF00', '#3B4CCA']} style={styles.container}>
      <Image style={styles.img} source={require("../images/pokemon-logo-8.png")}/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  
  },
  img:{
    justifyContent: 'center',
    width: 300,
    height: 110,
    margin: 10,
    borderRadius: 10,
  }
})