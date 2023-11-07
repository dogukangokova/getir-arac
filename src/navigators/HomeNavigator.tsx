import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BrandsScreen from '../screens/BrandsScreen';
import HowToWork from '../screens/HowToWork';

import Logo from '../../assets/getirarac.png'

import {Ionicons} from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';




const Stack = createStackNavigator();
const HomeNavigator = () => {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
      OpenSans_400Regular,
      OpenSans_600SemiBold,
      OpenSans_700Bold,
    });

    if (!fontsLoaded) {
      return null;
    }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} 
         options={{
            
            headerStyle: { backgroundColor: "#5C3EBC" },
            headerTitle: () => (
                <Image className='' source={Logo} />
          ),
         }}
      />
      <Stack.Screen name="BrandsDetails" component={BrandsScreen} 
         options={() => ({
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:10}}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: "#5C3EBC" },
            headerTitle: () => (
                <Image className='' source={Logo} />
          ),
         })}
      />
      <Stack.Screen name="HowToWork" component={HowToWork} 
         options={() => ({
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:10}}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: "#5C3EBC" },
            headerTitle: () => (
              <Text style={{fontFamily: "OpenSans_700Bold",  fontWeight: "bold", fontSize: 15, color: "white" }}>
                Nasıl Çalışır?
              </Text>
          ),
         })}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator