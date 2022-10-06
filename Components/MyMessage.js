import { View, Text, Button, ScrollView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import tw from "twrnc"

const MyMessage = (props) => {
    return ( 
        <View style={tw`w-full flex flex-row justify-end items-end my-[10px]`}>
            <View style={tw`bg-blue-400 max-w-[300px] rounded-[20px] `}>
                <Text style={tw`text-xl p-[12px] text-white`}>
                    {props.text}
                </Text>
            </View>
        </View>
     );
}
 
export default MyMessage;