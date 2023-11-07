import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, {useState} from 'react'

import { FontAwesome5 } from '@expo/vector-icons'; 
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

import { Fontisto } from '@expo/vector-icons'; 
import Svg, { Path } from 'react-native-svg';


const index = ({onButtonClick}) => {

  const [internalState, setInternalState] = useState(false);

  const handleButtonPress = () => {
    const newState = !internalState;
    setInternalState(newState);

    // Dışarıdan kontrol edilen bir durum varsa, onButtonClick fonksiyonunu çağırarak durumu iletebilirsiniz.
    if (onButtonClick) {
      onButtonClick(newState);
    }
  };

    const [selectedOption, setSelectedOption] = useState("araba");

  const options = [
    { label: 'Seçenek 1', value: 'option1' },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
  };
  

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  

  

  return (
    <View className='flex items-start mx-5'>
        <Text className='text-[#5D3EBD] mb-5' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 17}}>Araç tipi</Text>
        <View className='flex-col w-full'>
            <View className='flex-row mb-5 border-t-[1.5px] border-[#cfcfcf29]'>
                <TouchableOpacity className='flex-row items-center mt-4' onPress={() => handleSelect("araba")} >
                    <View className='w-[24] h-[24] rounded-full border-2 border-[#cfcfcf29] justify-center items-center mr-2'>
                      {selectedOption === "araba" && <View className='w-[18] h-[18] rounded-full bg-[#5D3EBD]' />}
                    </View>
                <View className='flex-row items-center gap-3'>
                    <FontAwesome5  name="car" size={24} color="#5D3EBD" />
                    <Text className='text-[#5D3EBD]' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 15}} >Araba</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View className='flex-row border-t-[1.5px] border-[#cfcfcf29] '>
                <View className='flex-row items-center mt-4'>
                    <View className='w-[24] h-[24] rounded-full border-2 border-[#cfcfcf29] justify-center items-center mr-2'>
                      {selectedOption === "motor" && <View className='w-[18] h-[18] rounded-full bg-[#5D3EBD]' />}
                    </View>
                    <View className='flex-row items-center gap-3'>
                        <Fontisto  name="motorcycle" size={24} color="#CFCFCF" />
                        <Text className='text-[#CFCFCF]' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 15}} >Motor</Text>
                        <Svg className='' width="69" height="30" viewBox="0 0 69 30" fill="none">
                            <Path d="M0 8C0 3.58172 3.58172 0 8 0H64.4393C67.8341 0 69.6856 3.96244 67.5075 6.56639L64.7465 9.86722C62.2616 12.838 62.2616 17.1621 64.7465 20.1328L67.5075 23.4336C69.6856 26.0376 67.8341 30 64.4393 30H8C3.58172 30 0 26.4183 0 22V8Z" fill="#FFD300"/>
                            <Text className='text-[#5D3EBD] py-[7.5] px-3' style={{fontFamily: "OpenSans_700Bold", fontSize: 10}}>yakında</Text>
                        </Svg>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={handleButtonPress} className="items-center justify-center mt-5 bg-[#5D3EBD] p-4 rounded-md">
                <Text className='text-white' style={{fontFamily: "OpenSans_600SemiBold", fontSize: 15}}>Vazgeç</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


export default index