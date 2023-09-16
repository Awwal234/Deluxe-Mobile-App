import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, { useState, useRef, useEffect } from 'react'

const HomeApplication = ({navigation}) => {
    const [location, setLocation] = useState('Lagos, Nigeria')
    const [search, setSearch] = useState('')
    const [content, setcontent] = useState(true)
    function searchText(newText) {
        setSearch(newText);
        if (search.length >= 1) {
            setcontent(false)
        } else {
            setcontent(true)
        }
    }
    function visibleContent() {
        if (search.length <= 0) {
            setcontent(true)
        } else {
            setcontent(false)
        }
    }
    useEffect(() => {
        if (search.length == 0) {
            setcontent(true)
        } else {
            setcontent(false)
        }
    }, [])
    
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
                <View className="bg-[#fafafa] min-h-[100vh] flex-1">
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View className="pt-[40px] mb-[32px] flex px-[26px] flex-row justify-between items-center">
                            <View className="space-y-[8px]">
                                <View>
                                    <Text className="text-[#92a5ab] tracking-[0.65px] font-[600] text-[13px] font-['ClashDisplay']">
                                        Location
                                    </Text>
                                </View>
                                <View className="flex space-x-[2px] flex-row items-center">
                                    <View>
                                        <Image resizeMode='contain' className="w-[22px] h-[22px]" source={require('../../public/img/locationicon.png') } /> 
                                    </View>
                                    <View>
                                        <Text className="tracking-[0.65px] font-['ClashDisplay'] font-[500] text-[#161b1d] text-[15px]">
                                            {location}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                                <View>
                                    <Image resizeMode='contain' className="w-[54px] h-[54px]" source={require('../../public/img/notideluxe.png') } /> 
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* header */}
                        <View className="px-[26px]">
                            <View className="mb-[25px]">
                                <TextInput onKeyPress={visibleContent} onChangeText={searchText} keyboardType='web-search' placeholder="Search products" className="px-[14px] font-['ClashDisplay'] border-[1.5px] border-[#e2e7e9] tracking-[0.75px] font-[500] text-[15px] text-[#6f8990] rounded-[5px] py-[16px] focus:outline-none"/>
                            </View>
                            {/* sales off */}
                            <View className={`${content ? 'flex flex-row' : 'hidden'} rounded-[10px] overflow-hidden px-[21px] justify-between bg-[#f3f3f3] w-full`}>
                                <View className="z-[1000] relative">
                                    <View>
                                        <Text className="font-['ClashDisplay'] mt-[34px] mb-[6px] tracking-[0.75px] font-[500] text-[20px] text-[#161b1d]">
                                            Flash Sales
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="font-['ClashDisplay'] mb-[23px] tracking-[0.9px] font-[500] text-[25px] text-[#000]">
                                            10% Off
                                        </Text>
                                    </View>
                                    <TouchableOpacity className="z-[1000]">
                                        <View className="px-[20px] relative mb-[37px] rounded-[4px] bg-[#161b1d] py-[10px]">
                                            <Text className="font-[600] font-['ClashDisplay'] tracking-[0.65px] text-[18px] text-[#fafafa]">
                                                Shop Now
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* second flex part */}
                            </View>
                            <View className={`${content ? 'flex flex-row' : 'hidden'} mb-[4px] relative z-[0] mt-[-200px] justify-between`}>
                                <View></View>
                                <View className="z-[0] relative top-[-6px]">
                                    <Image resizeMode='contain' className="w-[190px] h-[250px]" source={require('../../public/img/salesoffimage.png') } /> 
                                </View>
                            </View>
                            <View className={`${content ? 'block' : 'hidden'} relative`}>
                                <Text className="font-[500] mb-[15px] font-['ClashDisplay'] tracking-[0.9px] text-[20px] text-[#161b1d]">
                                    Categories
                                </Text>    
                            </View>
                            {/* ------ */}
                        </View>
                        {/* scrollview */}
                        <View className={`${content ? 'block' : 'hidden'} w-[100%] pb-[100px] h-[fit] oveflow-x-scroll pl-[26px]`}>
                            <ScrollView className="overflow-x-scroll" horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View className="flex h-fit overflow-x-scroll w-fit flex-row space-x-[9px]">
                                    <View className="px-[19px] bg-[#fff] w-[120px] rounded-[50px] text-center py-[10px]">
                                        <Text className="font-[500] text-center tracking-[0.65px]  font-['ClashDisplay'] text-[13px] text-[#161b1d]">
                                            Fashion
                                        </Text>
                                    </View>
                                    <View className="px-[19px] bg-[#fff] w-[120px] rounded-[50px] text-center py-[10px]">
                                        <Text className="font-[500] text-center tracking-[0.65px]  font-['ClashDisplay'] text-[13px] text-[#161b1d]">
                                            Gadget
                                        </Text>
                                    </View>
                                    <View className="px-[19px] bg-[#fff] w-[120px] rounded-[50px] text-center py-[10px]">
                                        <Text className="font-[500] text-center tracking-[0.65px]  font-['ClashDisplay'] text-[13px] text-[#161b1d]">
                                            Food
                                        </Text>
                                    </View>
                                    <View className="px-[19px] bg-[#fff] w-[120px] rounded-[50px] text-center py-[10px]">
                                        <Text className="font-[500] text-center tracking-[0.65px]  font-['ClashDisplay'] text-[13px] text-[#161b1d]">
                                            Beauty
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        {/* search result */}
                        <View className={`${content ? 'hidden' : 'block'} bg-[#fafafa]  mt-[25px] px-[36px]`}>
                            <View className="flex flex-row justify-between">
                                <View>
                                    <Text className="text-[15px] tracking-[0.75px] font-[500] font-['ClashDisplay'] text-[#000]">Result {`for "${search}"`}</Text>
                                </View>
                                <View>
                                    <Text className="text-[15px] tracking-[0.75px] font-[500] font-['ClashDisplay'] text-[#000]">Clear All</Text>
                                </View>
                            </View>
                            <View className="mt-[117px]">
                                <View className="mx-auto mb-[20px]">
                                    <Text className="font-['ClashDisplay'] font-[600] tracking-[0.9px] text-[18px]">
                                        Not Found
                                    </Text>
                                </View>
                                <View className="mx-auto mb-[10px]">
                                    <Text className="font-['ClashDisplay'] font-[500] tracking-[0.75px] text-[15px]">
                                        The keyword you entered cannot be found, please check or try a different keyword
                                    </Text>
                                </View>
                                <View className="mx-auto mb-[20px]">
                                    <Image className="w-[140.831px] mix-blend-mode-['luminosity'] h-[140.831px]" resizeMode='contain' source={require('../../public/img/emptybox.png')} />
                                </View>
                            </View>
                        </View>
                        {/* end search result */}
                    </ScrollView>
                    {/* end  scroll view */}
                    {/* end */}
                    {/* search bar and contents */}
                    
                    <View className="px-[37.5px] fixed top-[-20px] flex flex-row items-center justify-between bg-[#f3f3f3] py-[27px]">
                        <View>
                            <Image resizeMode='contain' className="w-[24px] h-[24px]" source={require('../../public/img/homeimg.png') } /> 
                        </View>
                        <View>
                            <Image resizeMode='contain' className="w-[24px] h-[24px]" source={require('../../public/img/cartimg.png') } /> 
                        </View>
                        <View>
                            <Image resizeMode='contain' className="w-[24px] h-[24px]" source={require('../../public/img/userimg.png') } /> 
                        </View>
                    </View>
                {/* footer */}
                </View>
        </SafeAreaView>
    )
}

export default HomeApplication