import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'

import Logo from './../../../assets/getirarac.png'

const index = () => {

    const types = [
        { id: 1, name: 'getiryemek' },
        { id: 2, name: 'getirbüyük' },
        { id: 3, name: 'getirçarşı' },
        { id: 4, name: 'getiraraç' },
        { id: 5, name: 'getirsu' },
      ]
    const {width ,height } = Dimensions.get('window')
    const [category,setCategory] = useState("getiraraç")

    const RenderView = ({active,item}:{active:string,item:string}) => {
        if (item != "getiraraç") {
            return (
                <TouchableOpacity className='bg-white h-12 ' style={[{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingHorizontal:10,borderRadius:6,marginRight:12},item == active ? {backgroundColor:'#5C3EBC'}:{borderColor:'#F0EFF7',borderWidth:1}]}>
                    <Text style={[{fontSize:12,color:'#7849F7',fontWeight:'600'},item==active && {color:'white'}]}>{item}</Text>
                </TouchableOpacity>
            );
        }else {
            return (
                <TouchableOpacity  className='bg-[#5C3EBC] h-12' style={[{flexDirection:'row',alignItems:'center',justifyContent:'center', paddingHorizontal:10,borderRadius:6,marginRight:12},item == active ? {backgroundColor:'#5C3EBC'}:{borderColor:'#F0EFF7',borderWidth:1}]}>
                        <Image resizeMode="contain" style={{height: 50, width: 50}}  source={Logo} />
                </TouchableOpacity>
            );
        }
        
      };

  return (
    <View className='h-18 ml-2'>
        <ScrollView  className='w-full h-max mt-[5%]' showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
            {types.map((item, index)=>(
                <RenderView key={index} item={item.name} active={category}  />
            ))
            }
        </ScrollView>
        
    </View>
  )
}

export default index