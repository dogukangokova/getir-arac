import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useRef} from 'react'
import { Octicons } from '@expo/vector-icons'; 
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';


const index = () => {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  const [searchText, setSearchText] = useState('');
  const textInputRef = useRef(null);

  const handleSearch = () => {
    console.log('Aranan Model: ', searchText);
  };

  const handleIconPress = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='flex-1'>
      <TouchableOpacity onPress={handleIconPress}>
        <View className='bg-white h-14 flex-row items-center'>
            <Octicons name="search" style={{paddingLeft: 25, paddingRight: 15}} size={30} color="#5D3EBD"/>
            <TextInput className="text-[#B3B3B3] font-semibold w-[75%]"
            style={{fontFamily: "OpenSans_400Regular", fontWeight: '300', fontSize: 16}}
            placeholder="Model ara"
            ref={textInputRef}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            ></TextInput>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default index