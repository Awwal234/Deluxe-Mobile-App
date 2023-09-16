import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React, {useState} from 'react'
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

const ForgotPassword = ({navigation}) => {
    const [board, setBoard] = useState(false)
    const [email, setEmail] = useState('')
    const [fontsLoaded] = useFonts({
        'ClashDisplay': require('../../../assets/fonts/ClashDisplay-Medium.otf'),
        })
        const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])
    if (!fontsLoaded) {
        return null;
    }
    function emailText(newText){
        setEmail(newText)
    }
    function goverifyEmail() {
        navigation.navigate('VerifyEmail')
    }
  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="bg-[#fafafa] min-h-[100vh] pt-[37px] px-[25px]">
                <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                    <View className="mb-[82px]">
                        <Image resizeMode="contain" className="w-[65px] h-[65px]" source={require('../../../public/img/navBack.png')}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <View>
                        <Text className="mx-auto mb-[15px] text-[#000] font-[600] tracking-[1.25px] text-center text-[25px] font-['ClashDisplay']">
                            Forgot Password
                        </Text>
                    </View>
                    <View className="mb-[35px]">
                        <Text className="mx-auto w-[80%] text-[#000] font-[400] tracking-[0.75px] text-center text-[15px] font-['ClashDisplay']">
                            Please enter the email attached to your account
                        </Text>
                    </View>
                    <View>
                        <View className="mb-[16px]">
                            <Text className="text-[15px] tracking-[0.75px] font-[500] text-[#000] font-['ClashDisplay']">
                                Email
                            </Text>
                        </View>
                        <View className="mb-[25px]">
                            <TextInput onChangeText={emailText} keyboardType='email-address' placeholder="example@gmail.com" className="px-[20px] border-[2px] border-[#e2e7e9] tracking-[0.75px] font-[500] text-[15px] text-[#6f8990] rounded-[5px] py-[15px]"/>
                        </View>
                        <TouchableOpacity onPress={goverifyEmail}>
                            <View className="mx-auto text-center py-[25px] rounded-[5px] bg-[#161B1D] w-full">
                                <Text className="text-[#fff] font-['ClashDisplay'] text-center mx-auto tracking-[0.9px] font-[500] text-[18px]">Get Code</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* end container */}
              </View>
              {/* end page */}
        </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword