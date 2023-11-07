import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';




const index = ({item}) => {
    
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
      });

      const {width ,height } = Dimensions.get('window')

      if (!fontsLoaded) {
        return null;
      }

      

      const RenderView = ({item}) => {
        return (
            <View className=''>
            <View className='mx-3 py-4 rounded-xl'>
                <View className='bg-white rounded-md h-72'>
                  <Image className='mt-5 rounded-xl mx-5' style={{height: height*0.19, width: width* 0.805}} source={{uri: item.modelBanner}} />
                  <View className='mt-5 mx-7 flex flex-row justify-between'>
                    <View className='mt-1'>
                      <Text className='mt-1 text-[#5D3EBD]' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 15}}>{item.text}</Text>
                      <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_700Bold", fontSize: 15}}>{item.header}</Text>
                      <Text className='text-[#697488] mt-2' style={{fontFamily: "OpenSans_400Regular", fontSize: 12}}>Başlangıç Fiyatı: 
                            <Text className='text-[#697488]' style={{fontFamily: "OpenSans_700Bold", fontSize: 12}}> {item.price}</Text>
                        </Text>
                    </View>
                    <View className='mt-4'>
                        <TouchableOpacity className='bg-white rounded-xl shadow-md p-3'>
                          <Entypo testID="right-icon" name="chevron-right" size={22} color="#5D3EBD" />
                        </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </View>
         </View>

         );
       };

      return (
        <View className=''>
            {item.models.map((model)=>(
                    <RenderView key={model.id} item={model}  />
                ))
                }
        </View>
    )
}

export default index