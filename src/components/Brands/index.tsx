import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from "react";

import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

import carBrands from '../../../assets/brands'
import BrandItem from '../BrandItem'

const index = () => {
    
    
    
      

    const [brands, setBrands] = useState(carBrands);

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
      });
      
    if (!fontsLoaded) {
        return null;
    }

    return (
      <View className='h-fit' style={{ backgroundColor: "#F5F5F5" }}>
        <View className='flex flex-row justify-between mt-10 mx-4 '>
            <Text className='text-[#697488] ' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 13}}>Öne Çıkan Modeller</Text>
            <TouchableOpacity>
                <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 13}}>Tümünü Gör ({brands.length})</Text>
            </TouchableOpacity>
        </View>
        <View className='flex flex-row items-start mt-4 flex-wrap justify-between mx-5'>
            {brands.map((item)=>(
                <BrandItem key={item.id} item={item} />
            ))}
        </View>
      </View>
    )
}

export default index