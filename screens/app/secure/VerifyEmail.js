import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

const VerifyEmail = ({ navigation }) => {
    const [email, setEmail] = useState('example@gmail.com')
    const firstInput = useRef(null)
    const secondInput = useRef(null)
    const thirdInput = useRef(null)
    const fourthInput = useRef(null)
    const [inputs, setInputs] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
    })
    function changeFirst(firstText) {
        setInputs({
            ...inputs,
            first: firstText,
        })
    }
    function changeSecond(secondText) {
        setInputs({
            ...inputs,
            second: secondText,
        })
    }
    function changeThird(thirdText) {
        setInputs({
            ...inputs,
            third: thirdText,
        })
    }
    function changeFourth(fourthText) {
        setInputs({
            ...inputs,
            fourth: fourthText,
        })
    }
    function moveSecond() {
        if (inputs.first.length == 1) {
            secondInput.current.focus()
        }
    }
    function moveThird() {
        if (inputs.second.length == 1) {
            thirdInput.current.focus()
        }
    }
    function moveFourth() {
        if (inputs.third.length == 1) {
            fourthInput.current.focus()
        }
    }
    function lastInput() {
        if (inputs.fourth.length == 1) {
            Keyboard.dismiss()
        }
    }
    function changePassword() {
        navigation.navigate('ChangePassword')
    }
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
  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="bg-[#fafafa] min-h-[100vh] pt-[37px] px-[25px]">
                <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                    <View className="mb-[82px]">
                        <Image resizeMode="contain" className="w-[65px] h-[65px]" source={require('../../../public/img/navBack.png')}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <View>
                        <Text className="mx-auto mb-[15px] text-[#000] font-[600] tracking-[1.25px] text-center text-[25px] font-['ClashDisplay']">
                            Verify Code
                        </Text>
                    </View>
                    <View className="mb-[45px]">
                        <Text className="mx-auto w-[80%] text-[#000] font-[400] tracking-[0.75px] text-center text-[15px] font-['ClashDisplay']">
                              Please enter the code we just sent to email <Text className="font-[500]">{ email }</Text>
                        </Text>
                    </View>
                    <View className="w-[100%] mb-[45px] justify-center mx-auto flex flex-row space-x-[34px]">
                        <View className="w-[15%]">
                            <TextInput keyboardType='numeric' maxLength={1} onKeyPress={moveSecond} onChangeText={changeFirst} ref={firstInput} className="w-full text-[18px] font-[600] tracking-[0.9px] text-[#000] font-['ClashDisplay'] text-center py-[16px] border-[1.5px] border-[#e2e7e9]"/>
                        </View>
                        <View className="w-[15%]">
                            <TextInput keyboardType='numeric' maxLength={1} onKeyPress={moveThird} onChangeText={changeSecond} ref={secondInput} className="w-full text-[18px] font-[600] tracking-[0.9px] text-[#000] font-['ClashDisplay'] text-center py-[16px] border-[1.5px] border-[#e2e7e9]"/>
                        </View>
                        <View className="w-[15%]">
                            <TextInput keyboardType='numeric' maxLength={1} onKeyPress={moveFourth} onChangeText={changeThird} ref={thirdInput} className="w-full text-[18px] font-[600] tracking-[0.9px] text-[#000] font-['ClashDisplay'] text-center py-[16px] border-[1.5px] border-[#e2e7e9]"/>
                        </View>
                        <View className="w-[15%]">
                            <TextInput keyboardType='numeric' value={inputs.fourth} maxLength={1} onKeyPress={lastInput} onChangeText={changeFourth} ref={fourthInput} className="w-full text-[18px] font-[600] tracking-[0.9px] text-[#000] font-['ClashDisplay'] text-center py-[16px] border-[1.5px] border-[#e2e7e9]"/>
                        </View>
                    </View>
                    <View>
                        <View className="mb-[7px]">
                            <Text className="mx-auto font-[500] tracking-[0.65px] font-['ClashDisplay'] text-[13px] w-fit text-[#161b1d]">
                                Didn't receive OTP?
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <View className="mb-[45px]">
                                <Text className="mx-auto font-bold tracking-[0.65px] font-['ClashDisplay'] text-[15px] w-fit text-[#161b1d]">
                                    Resend OTP
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={changePassword}>
                            <View className="mx-auto text-center py-[25px] rounded-[5px] bg-[#161B1D] w-full">
                                <Text className="text-[#fff] font-['ClashDisplay'] text-center mx-auto tracking-[0.9px] font-[500] text-[18px]">Verify</Text>
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

export default VerifyEmail