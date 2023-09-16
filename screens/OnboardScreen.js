import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'

const OnboardScreen = ({ navigation }) => {
    const goSignIn = () => {
        navigation.navigate('SignIn')
    }
    const [fontsLoaded] = useFonts({
        'ClashDisplay': require('../assets/fonts/ClashDisplay-Medium.otf'),
        })
        const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])
    if (!fontsLoaded) {
        return null;
    }
  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View styles={{fontFamily: 'ClashDisplay'}} className="bg-[#F3F3F3] font-['ClashDisplay'] w-full h-full">
                <View className="pt-[59px] w-full px-[15px]">
                    <View className="w-full h-fit">
                        <Image resizeMode={'contain'} className="w-full object-cover h-[631px]" source={require('../public/img/womanshopping.png') } /> 
                    </View>
                </View>
                <View className="bg-[#fafafa] shadow-md py-[73px] px-[27px] rounded-t-[30px] relative mt-[-180px]">
                    <View className="mx-auto">
                        <Text className="mx-auto font-['ClashDisplay'] text-[#000] mb-[25px] leading-[normal] tracking-[1px] text-[25px] font-[600] text-center">
                            Discover the best shopping with Calendeluxe
                        </Text>
                        <Text className="text-[#000] font-['ClashDisplay'] mb-[47px] tracking-[0.75px] text-[15px] font-[400] mx-auto text-center">
                              Lorem ipsum dolor sit amet consectetur.
                              Mauris vulputate lacus tristique mauris.
                        </Text>
                        <TouchableOpacity onPress={goSignIn}>
                            <View className="mx-auto text-center py-[25px] rounded-[5px] bg-[#161B1D] w-full">
                                <Text className="text-[#fff] font-['ClashDisplay'] text-center mx-auto tracking-[0.9px] font-[500] text-[18px]">Get Started</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        </ScrollView>
    </SafeAreaView>
  )
}

export default OnboardScreen