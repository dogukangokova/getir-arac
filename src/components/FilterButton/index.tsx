import { View, Text, TouchableOpacity} from 'react-native'
import React, {useState, useCallback} from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useFonts, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';


const index = ({ onButtonClick, externalControlledState }) => {

  const [internalState, setInternalState] = useState(false);

  const handleButtonPress = () => {
    const newState = !internalState;
    setInternalState(newState);

    // Dışarıdan kontrol edilen bir durum varsa, onButtonClick fonksiyonunu çağırarak durumu iletebilirsiniz.
    if (onButtonClick) {
      onButtonClick(newState);
    }
  };


  let [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='bg-white flex-1 flex-row justify-center mt-5 items-center mx-3 rounded-md p-2 shadow'>
      <TouchableOpacity onPress={handleButtonPress} className='bg-white h-10 ml-4' style={[{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingHorizontal:10,marginRight:12}]}>
        <FontAwesome5  name="filter" size={24} color="#5D3EBD" />
        <Text className="ml-7" style={[{fontFamily: "OpenSans_600SemiBold", fontSize:18,color:'#7849F7',fontWeight:'600'},{color:'#5D3EBD'}]}>Filtrele</Text>
      </TouchableOpacity>
      <View className='border-r-2 border-[#EFECF8] h-8 mx-6'>
          <Text></Text>
      </View>
      <TouchableOpacity className='bg-white h-10' style={[{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingHorizontal:10,marginRight:12}]}>
        <FontAwesome5  name="car" size={24} color="#5D3EBD" />
        <Text className="ml-7" style={[{fontFamily: "OpenSans_600SemiBold", fontSize:18,color:'#7849F7',fontWeight:'600'},{color:'#5D3EBD'}]}>Araba</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index