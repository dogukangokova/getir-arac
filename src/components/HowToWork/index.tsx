import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Photo from '../../img/howtowork.png'
import { Entypo } from '@expo/vector-icons'; 
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';


import { useNavigation } from '@react-navigation/native';


const index = () => {

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
    <View className=''>
      <Text className='text-[#697488] mt-7 ml-3' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 15}}>Nasıl Çalışır?</Text>
          <View className='mx-3  py-4 rounded-md'>
            <Image className='w-fit rounded-xl mx-5 absolute z-10' source={Photo} />
            <View className='bg-white rounded-md h-60'>
              <View className='top-44 mx-4 flex flex-row'>
                <View className='mt-1'>
                  <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_700Bold"}}>Oturduğun yerden araç almak mı?</Text>
                  <Text className='mt-1' style={{fontFamily: "OpenSans_400Regular", fontSize: 13}}>Kapıya araç teslimi nasıl çalışır?</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("HowToWork" as never)} className=' ml-9 bg-white rounded-xl shadow-md p-3'>
                  <Entypo testID="right-icon" name="chevron-right" size={22} color="#5D3EBD" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
    </View>
  )
}

export default index