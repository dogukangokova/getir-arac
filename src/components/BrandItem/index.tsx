import React,{useState} from 'react'
import {View, TouchableOpacity,Image , Text , StyleSheet, Dimensions} from "react-native"
import { Brand} from '../../models'
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

import { StackNavigationProp } from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native'

const {width ,height } = Dimensions.get('window')
type brandItemProps={
    item:Brand
}

function index({item}:brandItemProps) {

  const navigation = useNavigation<StackNavigationProp<any>>();

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity onPress={() => {console.log("BASILDI :"+item.name); navigation.navigate('BrandsDetails', {brand: item});}} className='flex-col items-center justify-between mb-10' style={{width:width*0.25,height:width*0.24}}>
        <View className='bg-white items-center justify-center py-7 w-28 rounded-lg shadow-md'>
            <Image style={{width:width*0.18,height:height*0.08,borderRadius:10}} source={{uri:item.src}} />
            <Text  style={{fontFamily: "OpenSans_600SemiBold",fontSize:12,color:'#616161',fontWeight:'500'}}>{item.name}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

})
export default index