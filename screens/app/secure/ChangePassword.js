import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React, {useState} from 'react'
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

const ChangePassword = ({navigation}) => {
    const [board, setBoard] = useState(false)
    const [password, setpassword] = useState('')
    const [password_retype, setpassword_retype] = useState('')
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
    function setPassword(newText){
        setpassword(newText)
    }
    function setRePassword(newText){
        setpassword_retype(newText)
    }
    function goverifyPassword() {
        navigation.navigate('HomeApplication')
    }
  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="bg-[#fafafa] min-h-[100vh] pt-[37px] px-[25px]">
                <TouchableOpacity onPress={()=>navigation.navigate('VerifyEmail')}>
                    <View className="mb-[82px]">
                        <Image resizeMode="contain" className="w-[65px] h-[65px]" source={require('../../../public/img/navBack.png')}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <View>
                        <Text className="mx-auto mb-[15px] text-[#000] font-[600] tracking-[1.25px] text-center text-[25px] font-['ClashDisplay']">
                            Change Password
                        </Text>
                    </View>
                    <View className="mb-[35px]">
                        <Text className="mx-auto w-[80%] text-[#000] font-[400] tracking-[0.75px] text-center text-[15px] font-['ClashDisplay']">
                            Please enter your new password
                        </Text>
                    </View>
                    <View>
                        <View className="mb-[16px]">
                            <Text className="text-[15px] tracking-[0.75px] font-[500] text-[#000] font-['ClashDisplay']">
                                New password
                            </Text>
                        </View>
                        <View className="mb-[25px]">
                            <TextInput secureTextEntry={true} onChangeText={setPassword} keyboardType='visible-password' placeholder="" className="px-[20px] border-[2px] border-[#e2e7e9] tracking-[0.75px] font-[500] text-[15px] text-[#6f8990] rounded-[5px] py-[15px]"/>
                        </View>
                        <View className="mb-[16px]">
                            <Text className="text-[15px] tracking-[0.75px] font-[500] text-[#000] font-['ClashDisplay']">
                                Re-type password
                            </Text>
                        </View>
                        <View className="mb-[25px]">
                            <TextInput secureTextEntry={true} onChangeText={setRePassword} keyboardType='visible-password' placeholder="" className="px-[20px] border-[2px] border-[#e2e7e9] tracking-[0.75px] font-[500] text-[15px] text-[#6f8990] rounded-[5px] py-[15px]"/>
                        </View>
                        <TouchableOpacity onPress={goverifyPassword}>
                            <View className="mx-auto text-center py-[25px] rounded-[5px] bg-[#161B1D] w-full">
                                <Text className="text-[#fff] font-['ClashDisplay'] text-center mx-auto tracking-[0.9px] font-[500] text-[18px]">Save</Text>
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

export default ChangePassword