import { View, Text, Button } from "react-native";
import { useState } from "react";
import tw from "twrnc"
import { LinearGradient } from "expo-linear-gradient";

const GradientText = (props) => {
    return ( 
        <View>
            <LinearGradient>
                <Text>{props.text}</Text>
            </LinearGradient>
        </View>
     );
}
 
export default GradientText;