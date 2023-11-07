import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'

import Images from '../../img/HowToWork/index';

const banners = [
  { url: Images.HowToWork1, text1: 'Aracını belirle, özelleştir!', text2: 'İster sedan, ister hatchback ister elektrikli, ister hybrid! 36 farklı marka ve yüzlerce modelden istediğin aracı seç paketini belirle.'},
  { url: Images.HowToWork2, text1: 'Güvenle Ödemeni yap.', text2: 'Güvenli şekilde ödemeni yap. İşlemlerin anında başlatılsın.'},
  { url: Images.HowToWork3, text1: 'Tüm belgelerin kapında.', text2: 'getiraraç uzmanımız; tüm pandemi önlemlerine uyarak, hijyenik koruma bulunan belgeleri sana teslim etsin, belgelerini doldur. Uzmanımız seni tüm süreç hakkında bilgilendirecek sorularını cevaplayacak.'},
  { url: Images.HowToWork4, text1: 'Aracın kapına gelsin.', text2: 'Artık her şey tamam, tüm süreci getiraraç üzerinden takip edebilirsin. Teslim tarihi geldiğinde aracını yetkili satıcı sana çekici ile hijyene uygun şekilde teslim edecek.'},
]

const RenderView = ({item}) => {
  return (
    <View className='bg-white mx-0 py-4 mt-5'>
            <Image className='w-fit rounded-xl mx-6 ' source={item.url} />
            <View className=' mx-6 flex flex-row'>
              <View className='mt-5'>
                <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_700Bold"}}>{item.text1}</Text>
                <Text className='mt-1' style={{fontFamily: "OpenSans_400Regular", fontSize: 13}}>{item.text2}</Text>
              </View>
            </View>
    </View>
  );
};


const index = () => {

  return (
    <View className='flex mb-24'>
        <View className='mt-[0%]'>
          <View className='bg-white mx-0 py-4 rounded-md'>
            <Image className='w-fit rounded-xl mx-6 ' source={require('../../img/HowToWork/HowToWorkHeader.png')} />
            <View className=' mx-6 flex flex-row'>
              <View className='mt-5'>
                <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_700Bold"}}>Oturduğun yerden araç almak mı?</Text>
                <Text className='mt-1' style={{fontFamily: "OpenSans_400Regular", fontSize: 13}}>Kapıya araç teslimi nasıl çalışır?</Text>
              </View>
            </View>
          </View>
      </View>
      <View className=''>
        <ScrollView className='pb-100 mt-4'>
          <View className='h-full pb-96 bg-white'>
              {banners.map((item, index)=>(
                <RenderView key={index} item={item}  />
              ))
              }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default index