import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'

import ModelSearch from '../../components/ModelSearch'
import BrandFiltering from '../../components/BrandFiltering'

const index = (props) => {
    const [brand,setCategory] = useState(props.route.params.brand)

  return (
    <View className='h-full'>
        <View className='h-11 mt-[0%]'>
            <ModelSearch/>
        </View>
        <ScrollView className='mt-[3%] flex-1 flex-col'>
            <BrandFiltering Brand={brand}/>
        </ScrollView>
    </View>
  )
}

export default index