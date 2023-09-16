import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, {useState, useRef} from 'react'

const CreateAccount = ({ navigation }) => {
    function goSignIn() {
        navigation.navigate('SignIn')
    }
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
    })
    const changeName = (newText) => {
        setForm({
            ...form,
            name: newText
        })
    }
    const changeEmail = (newText) => {
        setForm({
            ...form,
            email: newText
        })
    }
    const changePassword = (newText) => {
        setForm({
            ...form,
            password: newText
        })
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
        <ScrollView showsVerticalScrollIndicator={false} className="bg-[#fff]">
        <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="bg-[#fff] font-['ClashDisplay'] min-h-[100vh] pt-[94px]">
                <View className="mx-auto mb-[65px] w-[80%]">
                    <Text className="text-center font-['ClashDisplay'] mb-[15px] tracking-[1.25px] text-[25px] text-[#000] mx-auto font-[600]">
                        Create Account
                      </Text>
                      <Text className="font-[400] text-center font-['ClashDisplay'] text-[#000] tracking-[0.75px] text-[15px]">
                        Fill your information below or register 
                        with your social account
                      </Text>
                </View>
                <View className="px-[25px]">
                    <View className="mb-[25px]">
                        <Text className="text-[15px] mb-[16px] font-['ClashDisplay'] font-[500] tracking-[0.75px] text-[#000]">
                            Name
                        </Text>
                        <TextInput keyboardType='default' onChangeText={changeName} placeholder="John Doe" className="px-[20px] border-[2px] border-[#e2e7e9] tracking-[0.75px] font-[500] text-[15px] text-[#6f8990] rounded-[5px] py-[15px]"/>
                    </View>
                    <View className="mb-[25px]">
                        <Text className="text-[15px] mb-[16px] font-['ClashDisplay'] font-[500] tracking-[0.75px] text-[#000]">
                            Email
                        </Text>
                        <TextInput keyboardType='email-address' onChangeText={changeEmail} placeholder="example@gmail.com" className="px-[20px] border-[2px] border-[#e2e7e9] tracking-[0.75px] font-[500] text-[15px] text-[#6f8990] rounded-[5px] py-[15px]"/>
                    </View>
                    <View className="mb-[25px]">
                        <Text className="text-[15px] mb-[16px] font-['ClashDisplay'] font-[500] tracking-[0.75px] text-[#000]">
                            Password
                        </Text>
                        <TextInput secureTextEntry={true} keyboardType='visible-password' onChangeText={changePassword} className="px-[20px] border-[2px] border-[#e2e7e9] tracking-[0.75px] font-[500] text-[15px] text-[#6f8990] rounded-[5px] py-[15px]"/>
                    </View>
                    <TouchableOpacity onPress={goSignIn}>
                        <View className="mx-auto mb-[35px] text-center py-[25px] rounded-[5px] bg-[#161B1D] w-full">
                            <Text className="text-[#fff] font-['ClashDisplay'] text-center mx-auto tracking-[0.9px] font-[500] text-[18px]">Create Account</Text>
                        </View>
                    </TouchableOpacity>
                    <View className="h-[2px] w-full bg-[#e2e7e9]"></View>
                    <View className="w-fit mb-[32px] mx-auto bg-[#fff]">
                        <Text className="text-center bg-[#fff] font-['ClashDisplay'] relative top-[-8px] font-[500] text-[13px]">
                            or sign up with
                        </Text>
                    </View>
                    <View className="flex mb-[35px] flex-row space-x-[20px] mx-auto w-fit">
                        <View>
                            <Image resizeMode='contain' className="w-[65px] h-[65px]" source={require('../public/img/appleicon.png') } /> 
                        </View>
                        <View>
                            <Image resizeMode='contain' className="w-[65px] h-[65px]" source={require('../public/img/googleicon.png') } /> 
                        </View>
                    </View>
                    <View className="mx-auto mb-[30px] text-center w-fit">
                        <Text className="text-[#161b1d] font-[500] tracking-[0.65px] text-[13px] font-['ClashDisplay']">
                            Own an account? <Text className="font-[600] text-[#161b1d]">Sign In</Text>
                        </Text>
                    </View>
                </View>
                {/* end road */}
            </View> 
            </TouchableWithoutFeedback>      
        </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateAccount