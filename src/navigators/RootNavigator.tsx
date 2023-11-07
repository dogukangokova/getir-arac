import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';

import { Octicons, Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons';

import Svg, { Path } from 'react-native-svg';


const Tab = createBottomTabNavigator();

function RootNavigator() {

  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity
        className='shadow-lg'
        style={{
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 32,
          justifyContent: "center",
          marginTop: -22,
          alignItems: "center",
          backgroundColor: "white",
          width: 65,
          height: 65,
        }}
      >
        <View className='flex'>
          <View className='flex-row items-center justify-center mx-5'>
            <Svg className='m-[-1]' width="14" height="19" viewBox="0 0 16 21" fill="none">
              <Path d="M7.22081 0.3937C7.60812 -0.131233 8.39188 -0.131233 8.77919 0.3937L15.8103 9.92306C16.0632 10.2659 16.0632 10.7341 15.8103 11.0769L8.77919 20.6063C8.39188 21.1312 7.60812 21.1312 7.22081 20.6063L0.18974 11.0769C-0.0632471 10.7341 -0.0632465 10.2659 0.189741 9.92306L7.22081 0.3937Z" fill="#CFCFCF"></Path>
            </Svg>

            <Svg className='m-[-1]' width="11" height="21" viewBox="0 0 12 22" fill="none">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.456856 17.5141C0.186629 17.8711 0.186627 18.3642 0.456852 18.7212L2.64485 21.6118C3.03671 22.1294 3.82043 22.1294 4.21229 21.6118L11.8041 11.5823C12.0653 11.2372 12.0653 10.7628 11.8041 10.4177L4.21229 0.388229C3.82043 -0.12941 3.03671 -0.12941 2.64485 0.388229L0.456856 3.27877C0.18663 3.63576 0.186633 4.12887 0.456865 4.48586L4.94699 10.4176C5.20815 10.7627 5.20815 11.2372 4.94699 11.5823L0.456856 17.5141Z" fill="#CFCFCF"></Path>
            </Svg>
            <Svg className='m-[-1]' width="11" height="21" viewBox="0 0 12 22" fill="none">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.456856 17.5141C0.186629 17.8711 0.186627 18.3642 0.456852 18.7212L2.64485 21.6118C3.03671 22.1294 3.82043 22.1294 4.21229 21.6118L11.8041 11.5823C12.0653 11.2372 12.0653 10.7628 11.8041 10.4177L4.21229 0.388229C3.82043 -0.12941 3.03671 -0.12941 2.64485 0.388229L0.456856 3.27877C0.18663 3.63576 0.186633 4.12887 0.456865 4.48586L4.94699 10.4176C5.20815 10.7627 5.20815 11.2372 4.94699 11.5823L0.456856 17.5141Z" fill="#CFCFCF"></Path>
            </Svg>
            <Svg className='m-[-1]' width="11" height="21" viewBox="0 0 12 22" fill="none">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.456856 17.5141C0.186629 17.8711 0.186627 18.3642 0.456852 18.7212L2.64485 21.6118C3.03671 22.1294 3.82043 22.1294 4.21229 21.6118L11.8041 11.5823C12.0653 11.2372 12.0653 10.7628 11.8041 10.4177L4.21229 0.388229C3.82043 -0.12941 3.03671 -0.12941 2.64485 0.388229L0.456856 3.27877C0.18663 3.63576 0.186633 4.12887 0.456865 4.48586L4.94699 10.4176C5.20815 10.7627 5.20815 11.2372 4.94699 11.5823L0.456856 17.5141Z" fill="#CFCFCF"></Path>
            </Svg>
            <Svg className='m-[-1]' width="11" height="21" viewBox="0 0 12 22" fill="none">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.456856 17.5141C0.186629 17.8711 0.186627 18.3642 0.456852 18.7212L2.64485 21.6118C3.03671 22.1294 3.82043 22.1294 4.21229 21.6118L11.8041 11.5823C12.0653 11.2372 12.0653 10.7628 11.8041 10.4177L4.21229 0.388229C3.82043 -0.12941 3.03671 -0.12941 2.64485 0.388229L0.456856 3.27877C0.18663 3.63576 0.186633 4.12887 0.456865 4.48586L4.94699 10.4176C5.20815 10.7627 5.20815 11.2372 4.94699 11.5823L0.456856 17.5141Z" fill="#5C3EBC"></Path>
            </Svg>
            <Svg className='m-[-1.5]' width="11" height="21" viewBox="0 0 12 22" fill="none">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.456856 17.5141C0.186629 17.8711 0.186627 18.3642 0.456852 18.7212L2.64485 21.6118C3.03671 22.1294 3.82043 22.1294 4.21229 21.6118L11.8041 11.5823C12.0653 11.2372 12.0653 10.7628 11.8041 10.4177L4.21229 0.388229C3.82043 -0.12941 3.03671 -0.12941 2.64485 0.388229L0.456856 3.27877C0.18663 3.63576 0.186633 4.12887 0.456865 4.48586L4.94699 10.4176C5.20815 10.7627 5.20815 11.2372 4.94699 11.5823L0.456856 17.5141Z" fill="#CFCFCF"></Path>
            </Svg>
          </View>

          
        </View>
        
      </TouchableOpacity>
    );
  };


  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name="search"size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Sat"
          component={HomeNavigator}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

      <Tab.Screen
          name="Profile"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Support"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="headset-mic" size={24}  color={color}/>
            ),
          }}
        />
    </Tab.Navigator>
  );
}

export default RootNavigator