import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react'
import {ScrollView} from "react-native"

import Header from '../../components/Header'
import BannerCarousel from '../../components/BannerCarousel'
import GetirTypes from '../../components/GetirTypes'
import FilterButton from '../../components/FilterButton'
import HowToWork from '../../components/HowToWork'
import FeaturedModels from '../../components/FeaturedModels'
import HomeCard from '../../components/HomeCard'
import Brands from '../../components/Brands'
import BottomSheet from '../../components/BottomSheet'

import { Entypo } from '@expo/vector-icons'; 




import Logo from './../../../assets/getirarac.png'
import Card from '../../img/card1.png'
import Card2 from '../../img/card2.png'


import { BottomSheetModal } from '@gorhom/bottom-sheet'


const index = () => {

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // variables
  const snapPoints = useMemo(() => ['35%', '35%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);


  const [externalControlledState, setExternalControlledState] = useState(false);





  return (
    <View className='bg-[#5D3EBD] h-full'>
      <View className='h-11 mt-[0%]'>
        <Header/>
      </View>
      <ScrollView className='mt-[3%] flex-1 bg-[#F5F5F5]' /* Bu sabitliyor -->  stickyHeaderIndices={[0]} */ showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
         <View className='h-full pb-20'>
            <BannerCarousel/>
            <GetirTypes/>
            <FilterButton onButtonClick={handlePresentModalPress} externalControlledState={externalControlledState}/>
            <HowToWork/>
            <FeaturedModels/>
            <HomeCard Header="getiraraç Ekspertiz" Text1="Oturduğun yerden araç almak mı?" Text2="Kapıya araç teslimi nasıl çalışır?" Photo={Card} />
            <Brands/>
            <HomeCard Header="Araç Uzmanı" Text1="Almak istediğin aracı tarif et" Text2="getiraraç sana en uygun aracı bulsun." Photo={Card2} />
            
          </View>
      </ScrollView>

      <BottomSheetModal ref={bottomSheetModalRef} handleIndicatorStyle={{ backgroundColor: "#CFCFCF7A", width: "12%", marginTop: "0.5%" }} backgroundStyle={{borderRadius: 20, backgroundColor: "#FFFFFF"}} index={1} snapPoints={snapPoints} onChange={handleSheetChanges}>
          <BottomSheet onButtonClick={handleClosePress}/>
      </BottomSheetModal>
    </View>
    
  )
}


export default index