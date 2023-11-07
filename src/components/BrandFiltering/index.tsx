import { View, Text, Image, Dimensions } from 'react-native'
import React , {useState} from 'react'

import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

import { Brand } from '../../models'
import HomeCard from '../HomeCard';
import BrandCard from '../BrandCard';

const { width, height } = Dimensions.get("window");

const index = ({Brand}:{Brand:any}) => {
  const [object, setObject] = useState(Brand)

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  console.log("Brand : "+object.name)
  return (
    <View className=''>
      <Image  style={{ width: width, height: height * 0.24}} source={{uri : object.banner}}/>
      <View className='flex-1 shadow-sm'>
          <View className='bg-white flex-row items-center justify-start w-full h-24 px-5'>
            <View className='bg-white border-[#cfcfcf80] border-1 p-1 rounded-lg shadow-sm'>
              <Image className='w-14 h-14' source={{uri : object.src}} />
            </View>
            <View className='ml-3'>
              <Text className='' style={{fontFamily: "OpenSans_700Bold", fontSize: 15}}>{object.name} Türkiye</Text>
              <Text className='mt-1.5 text-[#697488]' style={{fontFamily: "OpenSans_400Regular", fontSize: 12}}>{object.models.length} Farklı Model Seçeneği</Text>
            </View>
          </View>
      </View>
      <View>
          <BrandCard key={object.id} item={object}/>
      </View>
    </View>
  )
}

export default index