import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function Endscreen({ gameOver, number, logs, setScreen, Setgameover }) {
    const pressed = () => {
        setScreen("")
        Setgameover("")
    }
    return (
        <View>
            <Text className="text-green-500 font-extrabold text-4xl mt-4 text-center">Game Over!</Text>
            <Text className="text-white mt-4 font-bold text-center">Your number</Text>
            <View className=" rounded-xl p-3">
                <Text className="text-yellow-500 text-center font-bold text-5xl">{number}</Text>
            </View>
            <View className="p-5 rounded-xl" style={{ backgroundColor: "#72063c50", width: "80%" }}>
                <Text className="text-center text-2xl text-white font-bold">Total Attempts!</Text>
                <Text className="text-green-500 text-2xl text-center font-extrabold">{gameOver + 1}</Text>
                <Text className="text-center text-xs text-slate-300 mt-5">You win if your friend's phone takes more attempt to guess the same number</Text>
                <View className="flex items-center justify-around mt-4 flex-row">
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ backgroundColor: "green" }}
                        className="px-5 py-2 m-4 rounded "
                        onPress={pressed}
                    >
                        <Text className="text-white font-bold text-lg text-center">Re-Try</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className="mb-16 overflow-scroll">
                {logs.map((e, i) => {
                    return <Text style={{ backgroundColor: "#72063c50" }} key={gameOver - i} className="text-center rounded m-2 p-2 text-white font-bold text-lg">{i + 1}) opponent gussed {e}</Text>
                })}
            </ScrollView>
        </View>
    );
}
