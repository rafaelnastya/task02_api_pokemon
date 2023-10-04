import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


import Homepage from './Homepage';
import Pokemons from './Pokemons';

const Tab = createBottomTabNavigator();

export default function Rotas(){
  return(
    <Tab.Navigator initialRouteName="Homepage" tabBarOptions={{ activeTintColor:"#000"}}>

      <Tab.Screen name="Homepage" component={Homepage} options={{tabBarLabel:'Home', tabBarIcon:({color,size})=> (<AntDesign name="pluscircle" size={24} color="black" />)}}/>

      <Tab.Screen name="Pokemons" component={Pokemons} options={{tabBarLabel:'Pokémons', tabBarIcon:({color,size})=> (<MaterialCommunityIcons name="pokeball" size={24} color="black" />)}}/>

    </Tab.Navigator>
  )
}
