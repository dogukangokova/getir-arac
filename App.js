import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigators/RootNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}


