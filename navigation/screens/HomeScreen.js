import * as React from 'react';
import { View, Text } from 'react-native';
import tw from "twrnc"

import Messages from "../../Components/Messages"


export default function HomeScreen() {
    return (
        <View style={tw``}>
            <Messages/>
        </View>
    );
}