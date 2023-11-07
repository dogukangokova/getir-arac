import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';




const index = ({ Header, Text1, Text2, Photo }) => {
    
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
      });

      const {width ,height } = Dimensions.get('window')

      if (!fontsLoaded) {
        return null;
      }

  return (
    <View className='mt-5'>
      <Text className='text-[#697488] mt-7 ml-3' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 15}}>{Header}</Text>
          <View className='mx-3  py-4 rounded-xl'>
            <View className='bg-white rounded-md h-64'>
              <Image className='mt-5 rounded-xl mx-5' style={{height: height*0.18, width: width* 0.805}} source={Photo} />
              <View className='mt-5 mx-7 flex flex-row justify-between'>
                <View className='mt-1'>
                  <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_700Bold"}}>{Text1}</Text>
                  <Text className='mt-1' style={{fontFamily: "OpenSans_400Regular", fontSize: 13}}>{Text2}</Text>
                </View>
                <TouchableOpacity className='bg-white rounded-xl shadow-md p-3'>
                  <Entypo testID="right-icon" name="chevron-right" size={22} color="#5D3EBD" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
    </View>
  )
}

export default index