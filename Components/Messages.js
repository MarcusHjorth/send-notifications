import { View, Text, Button, ScrollView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef, useEffect } from "react";
import tw from "twrnc"
import MyMessage from "./MyMessage"

const Messages = () => {
    const [ messagesArray, setMessagesArray ] = useState([
        { 
            message: "Gang gang", 
            gender: "uni",
            key: 1 
        },{ 
            message: "Du ser fanme godt ud i dag 😎", 
            gender: "uni",
            key: 2 
        },{ 
            message: "Er det solen der skinder, eller smilte du bare til mig 🤩", 
            gender: "uni",
            key: 3 
        },{ 
            message: "Bro, du må have en fantastisk dag", 
            gender: "male",
            key: 4 
        },{ 
            message: "LETS GOOOOO", 
            gender: "uni",
            key: 5 
        },{ 
            message: "LETS GOOOOO", 
            gender: "uni",
            key: 6 
        },{ 
            message: "Du lukker bare bøtten man", 
            gender: "uni",
            key: 7 
        },
        
    ])
    const [ index, setIndex ] = useState(0)
    const [ message, setMessage ] = useState()

    const [ myMessage, setMyMessage ] = useState()
    const [ textArray, setTextArray ] = useState([])
    
    const messageEndRef = useRef(null)
    
    const ChangeMessage = () => {
        let newIndex = Math.floor(Math.random() * (messagesArray.length - 0) + 0)
        // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
        setIndex(newIndex)
    }
    
    const HandleAddMessage = () => {
        if(myMessage != null) {
            /* Keyboard.dismiss() */
            setTextArray([...textArray, myMessage])
            setMyMessage(null)

        }
    }

    useEffect(() => {
        /* messageEndRef.current?.scrollIntoView({behavior: "smooth"}) */
    },[textArray]);

    return ( 
        <View style={tw`w-full h-full`}>
            <ScrollView contentContainerStyle={tw`mb-[65px] flex flex-col w-full`}>
                <View style={tw`flex flex-col justify-start items-start w-full p-[15px] my-[10px]`}>
                    <View style={tw`bg-gray-300 max-w-[300px] rounded-[20px] `}>
                        <Text style={tw`text-xl p-[12px] text-black`}
                        >{messagesArray[index].message}</Text>
                    </View>
                    {
                        textArray.map((item, i) => {
                            return <MyMessage key={i} text={item}/>
                        })
                    }
                </View>
                <View ref={messageEndRef}></View>
            </ScrollView>

        {/* Get a new Message from array */}
            <View style={tw`bg-white p-[5px] w-full shadow-md rounded-lg m-[10px] bottom-[0px] flex flex-col justify-center items-center`}>
                <Button style={tw``}
                    title="New Message"
                    onPress={ChangeMessage}
                />
            </View>

        {/* ------ Send Message -------- */}
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={tw`max-h-[50px] w-[250px] m-[20px] flex flex-row justify-center self-center`}
                >

                <TextInput style={tw`w-[250px] bg-white shadow-md rounded-[20px] text-[20px] p-[15px] mx-[10px]`} 
                    placeholder={"Aa"}
                    value={myMessage}
                    onChangeText={text => setMyMessage(text)}
                    >
                </TextInput>

                <TouchableOpacity  style={tw`w-[75px] bg-white shadow-md rounded-[20px]`}
                    onPress={() => HandleAddMessage()}
                    >
                    <Text style={tw`text-[20px] p-[15px]`}>Send</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
     );
}
 
export default Messages;