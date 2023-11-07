import { View, Text, Touchable, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import React from 'react'


import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';


const index = () => {
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
      });
      const { width, height } = Dimensions.get("window");


      const models = [
        { id: 1, url: 'https://media.graphassets.com/NlSKfVk0TOuF3jtK7jdY', text1: 'Yeni Golf.', text2: 'Efsane. Yeniden.', price: "₺236.400"},
        { id: 2, url: 'https://media.graphassets.com/KWUGnP8VT9yt3lvWLcmf', text1: 'Hayattan istediğini al', text2: '', price: "₺236.400"},
      ]


      if (!fontsLoaded) {
        return null;
      }

      const RenderView = ({item}) => {
            return (
                <View className='pr-5'>
                    <View className=''>
                        <Image className='rounded-md' style={{height: height*0.18, width: width* 0.74}} source={{uri: item.url}}/>
                    </View>
                    <View className='mt-2'>
                        <Text style={item.text2=='' ? {fontFamily: "OpenSans_400Regular", fontSize: 15}: {fontFamily: "OpenSans_700Bold", fontSize: 15}}>{item.text1} <Text style={{fontFamily: "OpenSans_400Regular", fontSize: 15}}>{item.text2}</Text></Text>
                    </View>
                    <View>
                        <Text className='text-[#697488]' style={{fontFamily: "OpenSans_400Regular", fontSize: 12}}>Başlangıç Fiyatı: 
                            <Text className='text-[#697488]' style={{fontFamily: "OpenSans_700Bold", fontSize: 12}}> {item.price}</Text>
                        </Text>
                    </View>
                </View>
            );

      };

  return (
    <View className='h-fit'>
        <View className='flex flex-row justify-between mt-3 mx-3 '>
            <Text className='text-[#697488] ' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 13}}>Öne Çıkan Modeller</Text>
            <TouchableOpacity>
                <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 13}}>Tümünü Gör ({models.length})</Text>
            </TouchableOpacity>
        </View>
        <View className='bg-white mt-3 p-4'>
            <ScrollView  className='w-full h-max mt-[5%]' showsHorizontalScrollIndicator={false} pagingEnabled bounces={true} horizontal={true}>
                {models.map((item)=>(
                    <RenderView key={item.id} item={item}  />
                ))
                }
            </ScrollView>
        </View>
      
    </View>
  )
}

export default index