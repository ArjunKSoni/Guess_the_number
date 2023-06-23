import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';

export default function Start({ setScreen }) {
    const [userInput, setInput] = useState("")
    const pressed = () => {
        if (userInput === "" || parseInt(userInput) <= 0) {
            Alert.alert("Invalid Number!", "Enter a number between 1 to 99", [{ text: "Okay", style: "destructive", onPress: setInput("") }])
        }
        else {
            setScreen(userInput)
        }
    }
    return (
        <View>
            <Text className="text-green-500 font-extrabold text-4xl mt-4 text-center">Lets Play!!</Text>
            <Text className="text-white mt-4 font-bold text-center">Enter a Number and let your phone guess it!!</Text>
            <View style={{ backgroundColor: "#72063c50" }} className="p-5 rounded-xl my-6">
                <TextInput
                    maxLength={2}
                    value={userInput}
                    onChangeText={e => setInput(e)}
                    keyboardType="number-pad"
                    style={{ backgroundColor: "#00000060" }}
                    autoFocus={true}
                    className=" text-yellow-500 px-5 mt-5 py-2 rounded-lg text-3xl font-bold text-center"
                />
                <View className="flex flex-row items-center justify-center text-center">
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ backgroundColor: "green", width: "38%" }}
                        className="px-5 py-2 m-4 rounded "
                        onPress={() => setInput("")}
                    >
                        <Text className="text-white font-bold text-lg text-center">Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ backgroundColor: "green", width: "38%" }}
                        className="px-5 py-2 m-4 rounded "
                        onPress={pressed}
                    >
                        <Text className="text-white font-bold text-lg text-center">Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
