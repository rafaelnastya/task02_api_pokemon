import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import styles from '../components/stylebb';

const request = async (callback) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function Pokemons(){
  const [registros, setRegistros] = useState([]);
  useEffect(() => {
    request(setRegistros);
  },[])


  return(
    <SafeAreaView style={styles.container}>
      <View>
      <Image style={styles.img} source={require("../images/pokemon-logo-8.png")}/>
      </View>
      <FlatList 
        data={registros} 
        keyExtractor={(item) => item.name.toString()} 
        renderItem={({item, index}) => 
        <View>
          <Text style={styles.item}>
            Nome: {item.name}{'\n'}
          </Text>
      </View>
      }/>
      </SafeAreaView>
  )
}