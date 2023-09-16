import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React, {useState} from 'react'
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

const NotificationPage = ({navigation}) => {
    const [board, setBoard] = useState(false)
    const [fontsLoaded] = useFonts({
        'ClashDisplay': require('../../assets/fonts/ClashDisplay-Medium.otf'),
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
      <View className="bg-[#fafafa] px-[24px] min-h-[100vh]">
        <View className="pt-[38px] flex items-center flex-row justify-between">
            <TouchableOpacity onPress={()=>navigation.navigate('HomeApplication')}>
                <View>
                    <Image className="w-[30px] h-[30px]" resizeMode='contain' source={require('../../public/img/arrowleft.png')} />
                </View>
            </TouchableOpacity>
            <View>
                <Text className="font-['ClashDisplay'] tracking-[0.9px] font-[500] text-[18px]">
                    Notification
                </Text>
            </View>
            <TouchableOpacity onPress={()=>setBoard(!board)}>
                <View>
                    <Image className="w-[30px] h-[30px]" resizeMode='contain' source={require('../../public/img/doty.png')} />
                </View>
            </TouchableOpacity>
        </View>
        {/* --- */}
        <View className="absolute w-[100%] top-[70px]">
            <View className={`${board ? 'flex flex-row relative top-[27px]' : 'hidden'} 'w-full'`}>
                <View className="w-[50%]"></View>
                <View className="bg-[#fff] space-y-[16px] shadow-md shadow-[#F3F3F3] w-[50%] rounded-[10px] p-[23px]">
                    <View>
                        <Text className="font-['ClashDisplay'] text-[#161b1d] tracking-[0.75px] font-[500] text-[15px]">Refresh</Text>
                    </View>
                    <View>
                        <Text className="font-['ClashDisplay'] text-[#161b1d] tracking-[0.75px] font-[500] text-[15px]">Clear All</Text>
                    </View>
                </View>
            </View>
        </View>
        {/* slight dropdown */}
        {/* content page */}
        <View className="flex flex-1 items-center justify-center">
            <View className="mx-auto mb-[20px]">
                <Text className="font-['ClashDisplay'] font-[600] tracking-[0.9px] text-[18px]">
                    You have no notification yet
                </Text>
            </View>
            <View className="mx-auto mb-[10px]">
                <Text className="font-['ClashDisplay'] font-[500] tracking-[0.75px] text-[15px]">
                    All your inbox notification will show up here
                </Text>
            </View>
            <View className="mx-auto mb-[20px]">
                <Image className="w-[140.831px] mix-blend-mode-['luminosity'] h-[140.831px]" resizeMode='contain' source={require('../../public/img/emptybox.png')} />
            </View>
        </View>
        {/* end content */}
      </View>
    </SafeAreaView>
  )
}

export default NotificationPage