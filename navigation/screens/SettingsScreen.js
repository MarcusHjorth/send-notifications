import * as React from 'react';
import { View, Text } from 'react-native';
import tw from "twrnc"

export default function SettingsScreen() {
    return (
        <View style={tw`flex justify-center items-center mt-[100px]`}>
            <Text style={tw`text-2xl w-[300px] h-[100px] text-center my-[50px]`}>
                What kind of messages would you like?
            </Text>
        </View>
    );
}