import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  
function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoard')
        }, 6000)
    })
    return (
      <SafeAreaView>
        <View className="bg-[#161B1D] h-full w-full">
            <View className="flex-1 w-full flex justify-center items-center ">
                    <Image className="w-[90px] h-[90px]" source={require('../public/img/cartlogo.png') } /> 
            </View>
        </View>
      </SafeAreaView>
    );
}
  
export default SplashScreen;